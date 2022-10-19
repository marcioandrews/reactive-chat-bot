import React from 'react';
import { View, StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
// import { colors, typography } from "../theme"

export function ChatBotBubble() {
    return (
        <View >
      
        </View>
    );
}

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: 'blue',
//   }
// });


type Sizes = keyof typeof $sizeStyles
// type Weights = keyof typeof typography.primary
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {

  // tx?: TxKeyPath

  text?: string
  
  style?: StyleProp<TextStyle>

  preset?: Presets

  // weight?: Weights

  size?: Sizes

  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export function Text(props: TextProps) {
  // const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props
  const { size, text, children, style: $styleOverride, ...rest } = props

  const content = text || children

  const preset: Presets = $presets[props.preset] ? props.preset : "default"
  const $styles = [
    $rtlStyle,
    $presets[preset],
    // $fontWeightStyles[weight],
    $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
]

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
}

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}