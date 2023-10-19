import React from 'react';
import {
  View,
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { colors } from 'src/theme';

type Sizes = keyof typeof $sizeStyles;
type Presets = keyof typeof $presets;

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
};

export interface BubbleProps extends RNTextProps {
  // tx?: TxKeyPath

  text?: string;

  style?: StyleProp<TextStyle>;

  preset?: Presets;

  size?: Sizes;

  children?: React.ReactNode;
}

export function ChatBotBubble(props: BubbleProps) {
  return <View></View>;
}

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: 'blue',
//   }
// });

// export function Text(props: TextProps) {
//   // const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props
//   const { size, text, children, style: $styleOverride, ...rest } = props

//   const content = text || children

//   const preset: Presets = $presets[props.preset] ? props.preset : "default"
//   const $styles = [
//     $rtlStyle,
//     $presets[preset],
//     // $fontWeightStyles[weight],
//     $sizeStyles[size],
//     $styleOverride,
//   ]

//   return (
//     <RNText {...rest} style={$styles}>
//       {content}
//     </RNText>
//   )
// }

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  { color: colors.text },
];

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg] as StyleProp<TextStyle>,

  formLabel: [$baseStyle] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm] as StyleProp<TextStyle>,
};
