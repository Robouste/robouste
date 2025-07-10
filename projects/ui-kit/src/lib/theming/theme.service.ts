import { Injectable } from '@angular/core';
import chroma from 'chroma-js';
import { DeepPartial, isKeyOf } from '../helpers';
import { RbPalette, RbScale } from '../models';
import { RbTheme, RbThemeColors } from '../models/theme.interface';
import { CssVarNames } from './css-variables';

const defaultPrimary = '#34f19a';
const defaultSecondary = '#ff4081';
const defaultAccent = '#3f51b5';
const defaultWarn = '#f44336';

const defaultThemeColors: RbThemeColors = {
  primary: defaultPrimary,
  secondary: defaultSecondary,
  accent: defaultAccent,
  warn: defaultWarn,
};

@Injectable({ providedIn: 'root' })
export class RbThemeService {
  private _rootElement: HTMLElement = document.documentElement;
  private _whiteText = '#eeeeee';
  private _blackText = '#111111';

  public setTheme(theme: DeepPartial<RbTheme>): void {
    this.setColors(theme.colors || {});
  }

  public setColors(colors: DeepPartial<RbThemeColors>): void {
    const themeColors = {
      ...defaultThemeColors,
      ...colors,
    };

    this._setCssVariable(CssVarNames.colors.primary, themeColors.primary);
    this._setCssVariable(CssVarNames.colors.secondary, themeColors.secondary);
    this._setCssVariable(CssVarNames.colors.accent, themeColors.accent);
    this._setCssVariable(CssVarNames.colors.warn, themeColors.warn);

    Object.keys(CssVarNames.colors.palettes).forEach((paletteKey) => {
      if (!isKeyOf(CssVarNames.colors.palettes, paletteKey)) {
        throw new Error(`Invalid palette key: ${paletteKey}`);
      }

      const palette = this.generatePalette(themeColors[paletteKey]);
      const paletteScalesVarNames = CssVarNames.colors.palettes[paletteKey];

      Object.entries(palette.scales).forEach(([scale, color]) => {
        const numericScale = Number(scale);

        if (!isKeyOf(paletteScalesVarNames, numericScale)) {
          throw new Error(`Invalid scale key: ${numericScale}`);
        }

        this._setCssVariable(paletteScalesVarNames[numericScale].color, color);
        this._setCssVariable(
          paletteScalesVarNames[numericScale].contrast,
          palette.contrasts[numericScale],
        );
      });
    });
  }

  public generatePalette(base: string): RbPalette {
    const scales: RbScale = {
      50: chroma(base).brighten(2.5).hex(),
      100: chroma(base).brighten(2).hex(),
      200: chroma(base).brighten(1.5).hex(),
      300: chroma(base).brighten(1).hex(),
      400: chroma(base).brighten(0.5).hex(),
      500: chroma(base).hex(),
      600: chroma(base).darken(0.5).hex(),
      700: chroma(base).darken(1).hex(),
      800: chroma(base).darken(1.5).hex(),
      900: chroma(base).darken(2).hex(),
    };

    const palette: RbPalette = {
      scales,
      contrasts: {
        50: this._getContrastColor(scales[50]),
        100: this._getContrastColor(scales[100]),
        200: this._getContrastColor(scales[200]),
        300: this._getContrastColor(scales[300]),
        400: this._getContrastColor(scales[400]),
        500: this._getContrastColor(scales[500]),
        600: this._getContrastColor(scales[600]),
        700: this._getContrastColor(scales[700]),
        800: this._getContrastColor(scales[800]),
        900: this._getContrastColor(scales[900]),
      },
    };

    return palette;
  }

  private _setCssVariable(name: string, value: string): void {
    this._rootElement.style.setProperty(name, value);
  }

  private _getContrastColor(scaleColor: string): string {
    return chroma.contrast(scaleColor, this._whiteText) > 4.5
      ? this._whiteText
      : this._blackText;
  }
}
