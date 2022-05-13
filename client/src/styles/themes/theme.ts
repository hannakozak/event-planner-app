import { colors, Colors } from './theme/colors';
import { text, Text } from './theme/text';
import { device, DeviceSize } from './theme/device'

export type ThemeType = {
    colors: Colors;
    text: Text,
    device: DeviceSize
};


export const theme: ThemeType = {
    colors,
    text,
    device
};