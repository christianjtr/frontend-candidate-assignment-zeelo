import fontSizes from "../theme/fontSizes";

declare global {
    export type FontSize = keyof typeof fontSizes;
}
