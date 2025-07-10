const varPrefix = '--rb';

export class CssVarNames {
  public static readonly colors = {
    primary: `${varPrefix}-color-primary`,
    secondary: `${varPrefix}-color-secondary`,
    accent: `${varPrefix}-color-accent`,
    warn: `${varPrefix}-color-warn`,
    palettes: {
      primary: {
        50: {
          color: `${varPrefix}-color-primary-50`,
          contrast: `${varPrefix}-color-primary-contrast-50`,
        },
        100: {
          color: `${varPrefix}-color-primary-100`,
          contrast: `${varPrefix}-color-primary-contrast-100`,
        },
        200: {
          color: `${varPrefix}-color-primary-200`,
          contrast: `${varPrefix}-color-primary-contrast-200`,
        },
        300: {
          color: `${varPrefix}-color-primary-300`,
          contrast: `${varPrefix}-color-primary-contrast-300`,
        },
        400: {
          color: `${varPrefix}-color-primary-400`,
          contrast: `${varPrefix}-color-primary-contrast-400`,
        },
        500: {
          color: `${varPrefix}-color-primary-500`,
          contrast: `${varPrefix}-color-primary-contrast-500`,
        },
        600: {
          color: `${varPrefix}-color-primary-600`,
          contrast: `${varPrefix}-color-primary-contrast-600`,
        },
        700: {
          color: `${varPrefix}-color-primary-700`,
          contrast: `${varPrefix}-color-primary-contrast-700`,
        },
        800: {
          color: `${varPrefix}-color-primary-800`,
          contrast: `${varPrefix}-color-primary-contrast-800`,
        },
        900: {
          color: `${varPrefix}-color-primary-900`,
          contrast: `${varPrefix}-color-primary-contrast-900`,
        },
      },
      secondary: {
        50: {
          color: `${varPrefix}-color-secondary-50`,
          contrast: `${varPrefix}-color-secondary-contrast-50`,
        },
        100: {
          color: `${varPrefix}-color-secondary-100`,
          contrast: `${varPrefix}-color-secondary-contrast-100`,
        },
        200: {
          color: `${varPrefix}-color-secondary-200`,
          contrast: `${varPrefix}-color-secondary-contrast-200`,
        },
        300: {
          color: `${varPrefix}-color-secondary-300`,
          contrast: `${varPrefix}-color-secondary-contrast-300`,
        },
        400: {
          color: `${varPrefix}-color-secondary-400`,
          contrast: `${varPrefix}-color-secondary-contrast-400`,
        },
        500: {
          color: `${varPrefix}-color-secondary-500`,
          contrast: `${varPrefix}-color-secondary-contrast-500`,
        },
        600: {
          color: `${varPrefix}-color-secondary-600`,
          contrast: `${varPrefix}-color-secondary-contrast-600`,
        },
        700: {
          color: `${varPrefix}-color-secondary-700`,
          contrast: `${varPrefix}-color-secondary-contrast-700`,
        },
        800: {
          color: `${varPrefix}-color-secondary-800`,
          contrast: `${varPrefix}-color-secondary-contrast-800`,
        },
        900: {
          color: `${varPrefix}-color-secondary-900`,
          contrast: `${varPrefix}-color-secondary-contrast-900`,
        },
      },
      accent: {
        50: {
          color: `${varPrefix}-color-accent-50`,
          contrast: `${varPrefix}-color-accent-contrast-50`,
        },
        100: {
          color: `${varPrefix}-color-accent-100`,
          contrast: `${varPrefix}-color-accent-contrast-100`,
        },
        200: {
          color: `${varPrefix}-color-accent-200`,
          contrast: `${varPrefix}-color-accent-contrast-200`,
        },
        300: {
          color: `${varPrefix}-color-accent-300`,
          contrast: `${varPrefix}-color-accent-contrast-300`,
        },
        400: {
          color: `${varPrefix}-color-accent-400`,
          contrast: `${varPrefix}-color-accent-contrast-400`,
        },
        500: {
          color: `${varPrefix}-color-accent-500`,
          contrast: `${varPrefix}-color-accent-contrast-500`,
        },
        600: {
          color: `${varPrefix}-color-accent-600`,
          contrast: `${varPrefix}-color-accent-contrast-600`,
        },
        700: {
          color: `${varPrefix}-color-accent-700`,
          contrast: `${varPrefix}-color-accent-contrast-700`,
        },
        800: {
          color: `${varPrefix}-color-accent-800`,
          contrast: `${varPrefix}-color-accent-contrast-800`,
        },
        900: {
          color: `${varPrefix}-color-accent-900`,
          contrast: `${varPrefix}-color-accent-contrast-900`,
        },
      },
      warn: {
        50: {
          color: `${varPrefix}-color-warn-50`,
          contrast: `${varPrefix}-color-warn-contrast-50`,
        },
        100: {
          color: `${varPrefix}-color-warn-100`,
          contrast: `${varPrefix}-color-warn-contrast-100`,
        },
        200: {
          color: `${varPrefix}-color-warn-200`,
          contrast: `${varPrefix}-color-warn-contrast-200`,
        },
        300: {
          color: `${varPrefix}-color-warn-300`,
          contrast: `${varPrefix}-color-warn-contrast-300`,
        },
        400: {
          color: `${varPrefix}-color-warn-400`,
          contrast: `${varPrefix}-color-warn-contrast-400`,
        },
        500: {
          color: `${varPrefix}-color-warn-500`,
          contrast: `${varPrefix}-color-warn-contrast-500`,
        },
        600: {
          color: `${varPrefix}-color-warn-600`,
          contrast: `${varPrefix}-color-warn-contrast-600`,
        },
        700: {
          color: `${varPrefix}-color-warn-700`,
          contrast: `${varPrefix}-color-warn-contrast-700`,
        },
        800: {
          color: `${varPrefix}-color-warn-800`,
          contrast: `${varPrefix}-color-warn-contrast-800`,
        },
        900: {
          color: `${varPrefix}-color-warn-900`,
          contrast: `${varPrefix}-color-warn-contrast-900`,
        },
      },
    },
  };

  public static readonly spacings = {
    xs: `${varPrefix}-spacing-xs`,
    sm: `${varPrefix}-spacing-sm`,
    md: `${varPrefix}-spacing-md`,
    lg: `${varPrefix}-spacing-lg`,
    xl: `${varPrefix}-spacing-xl`,
  };

  public static readonly typography = {
    fontSizeBase: `${varPrefix}-font-size-base`,
  };

  public static readonly shadows = {
    boxShadowLight: `${varPrefix}-box-shadow-light`,
    boxShadowMedium: `${varPrefix}-box-shadow-medium`,
    boxShadowHeavy: `${varPrefix}-box-shadow-heavy`,
  };
}
