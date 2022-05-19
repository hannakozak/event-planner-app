import { colors, Colors } from './theme/colors';
import { fontSize, FontSize } from './theme/fontSize';
import { device, DeviceSize } from './theme/device'

export type ThemeType = {
    colors: Colors;
    fontSize: FontSize,
    device: DeviceSize
};

export const theme: ThemeType = {
    colors,
    fontSize,
    device
};