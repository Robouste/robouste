import { Component, signal, WritableSignal } from '@angular/core';
import { RbPalette, RbThemeService } from 'ui-kit';

interface UiPalette {
  scale: string;
  color: string;
  contrast: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected palettes: WritableSignal<UiPalette[][]> = signal([]);

  private _colors = [
    '#34f19a',
    '#ff4081',
    '#3f51b5',
    '#f44336',
    '#4caf50',
    '#2196f3',
    '#ff9800',
    '#9c27b0',
    '#00bcd4',
    '#8bc34a',
    '#ffc107',
    '#673ab7',
    '#e91e63',
    '#009688',
    '#cddc39',
    '#ffeb3b',
    '#795548',
    '#607d8b',
  ];

  constructor(private _themeService: RbThemeService) {
    this.palettes.set(
      this._colors.map((color) => {
        const palette = this._themeService.generatePalette(color);
        return this._getUiPalettes(palette);
      }),
    );

    this._themeService.setTheme({
      colors: {
        primary: '#9c27b0',
      },
    });
  }

  protected onThemeSelect(uiPalettes: UiPalette[]): void {
    const primary = uiPalettes.find((p) => p.scale === '500')?.color;

    if (!primary) {
      console.error('Primary color not found in selected palette');
      return;
    }

    console.log('Selected primary color:', primary);

    this._themeService.setTheme({
      colors: {
        primary,
      },
    });
  }

  private _getUiPalettes(palette: RbPalette): UiPalette[] {
    return Object.entries(palette.scales).map(([scale, color]) => {
      if (!this._isKeyOf(palette.scales, scale)) {
        throw new Error(`Invalid scale key: ${scale}`);
      }

      return {
        scale,
        color,
        contrast: palette.contrasts[scale],
      };
    });
  }

  private _isKeyOf<T extends {}>(obj: T, key: PropertyKey): key is keyof T {
    return key in obj;
  }
}
