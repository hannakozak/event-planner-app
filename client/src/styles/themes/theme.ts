import { colors, Colors } from './theme/colors';
import { text, Text } from './theme/text';

export type ThemeType = {
    colors: Colors;
    text: Text
};


export const theme: ThemeType = {
    colors,
    text
};