import { extendTheme } from "native-base";


const theme = extendTheme({
  colors: {
    primary: {
      50: '#ffe6e5',
      100: '#fbbdb8',
      200: '#f3908b',
      300: '#ed5f5e',
      400: '#e73235',
      500: '#ce1a22',
      600: '#a1121f',
      700: '#740b0f',
      800: '#470705',
      900: '#1e0500',
    },
    secondary: {
      50: '#fcf9e1',
      100: '#f2eebb',
      200: '#eae394',
      300: '#e1d76b',
      400: '#d8cc42',
      500: '#bfb229',
      600: '#948b1e',
      700: '#6a6313',
      800: '#403b08',
      900: '#161400',
    },
    tertiary: {
      50: '#e2fbf1',
      100: '#c2ebd8',
      200: '#9fdebf',
      300: '#7bcfa3',
      400: '#57c186',
      500: '#3ea868',
      600: '#2e8356',
      700: '#1e5d41',
      800: '#0f3929',
      900: '#00150c',
    },
    light: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    dark:
    {
      900: '#ebf6fc',
      800: '#cddae5',
      700: '#acbed0',
      600: '#8ba3be',
      500: '#6b87ac',
      400: '#516b92',
      300: '#3f5173',
      200: '#2d3952',
      100: '#1a2232',
      50: '#070c15',
    }
  },
  config: {
    useSystemColorMode: false,
    suppressColorAccessibilityWarning: true
  },
  fontConfig: {
    Jost: {
      300: {
        normal: 'Jost_300Light',
        italic: 'Jost_300Light_Italic',
      },
      400: {
        normal: 'Jost_400Regular',
        italic: 'Jost_400Regular_Italic',
      },
      500: {
        normal: 'Jost_500Medium',
        italic: 'Jost_500Medium_Italic'
      },
      600: {
        normal: 'Jost_600SemiBold',
        italic: 'Jost_600SemiBold_Italic',
      },
      700: {
        normal: 'Jost_700Bold',
        italic: 'Jost_700Bold_Italic'
      }
    },
  },
  fonts: {
    heading: 'Jost',
    body: 'Jost',
    mono: 'Jost',
  },
});

export default theme;