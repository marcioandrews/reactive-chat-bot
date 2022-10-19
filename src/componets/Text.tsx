import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { colors } from "../theme"

type Sizes = keyof typeof $sizeStyles
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {

  text?: string

  style?: StyleProp<TextStyle>

  preset?: Presets

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
  const { size, text, children, style: $styleOverride, ...rest } = props

  const content = text || children

  const preset: Presets = $presets[props.preset] ? props.preset : "default"
  const $styles = [
    $presets[preset],
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

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  { color: colors.text },
]

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, ] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl, ] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg, ] as StyleProp<TextStyle>,

  formLabel: [$baseStyle,] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm,] as StyleProp<TextStyle>,
}