import { spacing } from './units'

const white = '#fff'
const black = '#111'

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#0032A0',
    light: '#146DD6',
    contrastText: white,
  },
  secondary: {
    main: '#004647',
    light: '#185F61',
    contrastText: white,
  },
  tertiary: {
    main: '#996E00',
    light: '#B98F23',
    contrastText: white,
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
  orange: {
    main: '#DE6B00',
    light: '#FF9A3D',
    contrastText: white,
  },
  white: {
    main: '#ff5500',
    light: '#ff0000',
    contrastText: black,
  },
}

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
}

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
}

const shape = {
  borderRadius: spacing['0'],
}

export const theme = {
  palette,
  shadows,
  typography,
  shape,
}
