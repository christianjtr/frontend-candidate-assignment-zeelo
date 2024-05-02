import fontSizes from '../theme/fontSizes';

declare global {
  type FontSize = keyof typeof fontSizes;
}
