import { createStitches } from "@stitches/core"

export const { keyframes,
  css,
  theme,
  getCssText,
  createTheme,
  config,
  globalCss
} = createStitches({
  theme: {
   colors: {
    tomato1: "hsl(10 100% 99.4%)",
    tomato2: "hsl(8 100% 98.4%)",
    tomato3: "hsl(8 100% 96.6%)",
    tomato4: "hsl(8 100% 94.3%)",
    tomato5: "hsl(8 92.8% 91.0%)",
    tomato6: "hsl(9 84.7% 86.3%)",
    tomato7: "hsl(10 77.3% 79.5%)",
    tomato8: "hsl(10 71.6% 71.0%)",
    tomato9: "hsl(10 78.0% 54.0%)",
    tomato10: "hsl(10 71.5% 50.0%)",
    tomato11: "hsl(10 82.0% 43.5%)",
    tomato12: "hsl(10 50.0% 13.5%)",
    red1: "hsl(359 100% 99.4%)",
    red2: "hsl(359 100% 98.6%)",
    red3: "hsl(360 100% 96.8%)",
    red4: "hsl(360 97.9% 94.8%)",
    red5: "hsl(360 90.2% 91.9%)",
    red6: "hsl(360 81.7% 87.8%)",
    red7: "hsl(359 74.2% 81.7%)",
    red8: "hsl(359 69.5% 74.3%)",
    red9: "hsl(358 75.0% 59.0%)",
    red10: "hsl(358 69.4% 55.2%)",
    red11: "hsl(358 65.0% 48.7%)",
    red12: "hsl(354 50.0% 14.6%)",
    gray1: "hsl(0 0% 99.0%)",
    gray2: "hsl(0 0% 97.3%)",
    gray3: "hsl(0 0% 95.1%)",
    gray4: "hsl(0 0% 93.0%)",
    gray5: "hsl(0 0% 90.9%)",
    gray6: "hsl(0 0% 88.7%)",
    gray7: "hsl(0 0% 85.8%)",
    gray8: "hsl(0 0% 78.0%)",
    gray9: "hsl(0 0% 56.1%)",
    gray10: "hsl(0 0% 52.3%)",
    gray11: "hsl(0 0% 43.5%)",
    gray12: "hsl(0 0% 9.0%)",
    blue1: "hsl(206 100% 99.2%)",
    blue2: "hsl(210 100% 98.0%)",
    blue3: "hsl(209 100% 96.5%)",
    blue4: "hsl(210 98.8% 94.0%)",
    blue5: "hsl(209 95.0% 90.1%)",
    blue6: "hsl(209 81.2% 84.5%)",
    blue7: "hsl(208 77.5% 76.9%)",
    blue8: "hsl(206 81.9% 65.3%)",
    blue9: "hsl(206 100% 50.0%)",
    blue10: "hsl(208 100% 47.3%)",
    blue11: "hsl(211 100% 43.2%)",
    blue12: "hsl(211 100% 15.0%)",
    green1: "hsl(136 50.0% 98.9%)",
    green2: "hsl(138 62.5% 96.9%)",
    green3: "hsl(139 55.2% 94.5%)",
    green4: "hsl(140 48.7% 91.0%)",
    green5: "hsl(141 43.7% 86.0%)",
    green6: "hsl(143 40.3% 79.0%)",
    green7: "hsl(146 38.5% 69.0%)",
    green8: "hsl(151 40.2% 54.1%)",
    green9: "hsl(151 55.0% 41.5%)",
    green10: "hsl(152 57.5% 37.6%)",
    green11: "hsl(153 67.0% 28.5%)",
    green12: "hsl(155 40.0% 14.0%)",
    orange1: "hsl(24 70.0% 99.0%)",
    orange2: "hsl(24 83.3% 97.6%)",
    orange3: "hsl(24 100% 95.3%)",
    orange4: "hsl(25 100% 92.2%)",
    orange5: "hsl(25 100% 88.2%)",
    orange6: "hsl(25 100% 82.8%)",
    orange7: "hsl(24 100% 75.3%)",
    orange8: "hsl(24 94.5% 64.3%)",
    orange9: "hsl(24 94.0% 50.0%)",
    orange10: "hsl(24 100% 46.5%)",
    orange11: "hsl(24 100% 37.0%)",
    orange12: "hsl(15 60.0% 17.0%)",
    whiteA1: "hsl(0 0% 100% / 0)",
    whiteA2: "hsl(0 0% 100% / 0.013)",
    whiteA3: "hsl(0 0% 100% / 0.034)",
    whiteA4: "hsl(0 0% 100% / 0.056)",
    whiteA5: "hsl(0 0% 100% / 0.086)",
    whiteA6: "hsl(0 0% 100% / 0.124)",
    whiteA7: "hsl(0 0% 100% / 0.176)",
    whiteA8: "hsl(0 0% 100% / 0.249)",
    whiteA9: "hsl(0 0% 100% / 0.386)",
    whiteA10: "hsl(0 0% 100% / 0.446)",
    whiteA11: "hsl(0 0% 100% / 0.592)",
    whiteA12: "hsl(0 0% 100% / 0.923)",
    blackA1: "hsl(0 0% 0% / 0.012)",
    blackA2: "hsl(0 0% 0% / 0.027)",
    blackA3: "hsl(0 0% 0% / 0.047)",
    blackA4: "hsl(0 0% 0% / 0.071)",
    blackA5: "hsl(0 0% 0% / 0.090)",
    blackA6: "hsl(0 0% 0% / 0.114)",
    blackA7: "hsl(0 0% 0% / 0.141)",
    blackA8: "hsl(0 0% 0% / 0.220)",
    blackA9: "hsl(0 0% 0% / 0.439)",
    blackA10: "hsl(0 0% 0% / 0.478)",
    blackA11: "hsl(0 0% 0% / 0.565)",
    blackA12: "hsl(0 0% 0% / 0.910)",
    yellow1: "hsl(60 54.0% 98.5%)",
    yellow2: "hsl(52 100% 95.5%)",
    yellow3: "hsl(55 100% 90.9%)",
    yellow4: "hsl(54 100% 86.6%)",
    yellow5: "hsl(52 97.9% 82.0%)",
    yellow6: "hsl(50 89.4% 76.1%)",
    yellow7: "hsl(47 80.4% 68.0%)",
    yellow8: "hsl(48 100% 46.1%)",
    yellow9: "hsl(53 92.0% 50.0%)",
    yellow10: "hsl(50 100% 48.5%)",
    yellow11: "hsl(42 100% 29.0%)",
    yellow12: "hsl(40 55.0% 13.5%)"
  },
  space: {
    0: 0,
    1: "2px",
    2: "4px",
    3: "8px",
    4: "16px",
    5: "32px",
    6: "64px",
    7: "128px"
  },
  fontSizes: {
    0: 12,
    1: "15px",
    2: "18px",
    3: "21px",
    4: "25px",
    5: "30px",
    6: "36px",
    7: "43px",
    8: "52px",
    9: "62px"
  },
  fonts: {
    body: "Untitled Sans, -apple-system, system-ui, sans-serif",
    mono: "Söhne Mono, menlo, monospace"
  },
  fontWeights: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    9: "900"
  },
  lineHeights: {},
  letterSpacings: {},
  sizes: {
    1: '0.3rem',
    2: '0.5rem',
    3: '0.9rem',
    4: '1rem',
    5: '1.1rem',
    6: '1.4rem',
    7: '1.8rem',
    8: '2rem',
    9: '3rem',
    10: '4rem',
    11: '5rem',
  },
  borderWidths: {},
  borderStyles: {},
  radii: {
    1: '4px',
    2: '6px',
    3: '8px',
    4: '0.8rem',
    round: '50%',
    pill: '9999px',
  },
  shadows: {
    1: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
    2: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    3: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
    4: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    max: '999',
  },
  transitions: {}
 },
 media: {
  bp1: '(min-width: 520px)',
  bp2: '(min-width: 900px)',
  bp3: '(min-width: 1200px)',
  bp4: '(min-width: 1800px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
},
 utils: {
  p: (value) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value) => ({
    paddingTop: value,
  }),
  pr: (value) => ({
    paddingRight: value,
  }),
  pb: (value) => ({
    paddingBottom: value,
  }),
  pl: (value) => ({
    paddingLeft: value,
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value) => ({
    marginTop: value,
  }),
  mr: (value) => ({
    marginRight: value,
  }),
  mb: (value) => ({
    marginBottom: value,
  }),
  ml: (value) => ({
    marginLeft: value,
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value) => ({ textAlign: value }),

  fd: (value) => ({ flexDirection: value }),
  fw: (value) => ({ flexWrap: value }),

  ai: (value) => ({ alignItems: value }),
  ac: (value) => ({ alignContent: value }),
  jc: (value) => ({ justifyContent: value }),
  as: (value) => ({ alignSelf: value }),
  fg: (value) => ({ flexGrow: value }),
  fs: (value) => ({ fontSize: value }),
  fb: (value) => ({ flexBasis: value }),

  bg: (value) => ({
    backgroundColor: value,
  }),

  br: (value) => ({
    borderRadius: value,
  }),
  btrr: (value) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value) => ({ boxShadow: value }),

  lh: (value) => ({ lineHeight: value }),

  ox: (value) => ({ overflowX: value }),
  oy: (value) => ({ overflowY: value }),

  pe: (value) => ({ pointerEvents: value }),
  us: (value) => ({ WebkitUserSelect: value, userSelect: value }),

  size: (value) => ({
    width: value,
    height: value,
  }),

  linearGradient: (value) => ({
    backgroundImage: `linear-gradient(to bottom right,${value}, rgba(37,99,235,0))`,
  }),

  appearance: (value) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  userSelect: (value) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  backgroundClip: (value) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
   }),
  },
},


)


