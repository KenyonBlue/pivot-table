/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  fontWeight: {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  wild: 1000,
  },
  backgroundPosition: {
  bottom: "bottom",
  "bottom-filta": "0% 80%",
  "bottom-4": "center bottom 1rem",
  center: "center",
  left: "left",
  "left-bottom": "left bottom",
  "left-top": "left top",
  right: "right",
  "right-pd": "40% 50%",
  "right-bottom": "right bottom",
  "right-top": "right top",
  top: "top",
  "top-4": "center top 1rem",
  },
  screens: {
  xs: "400px",
  // => @media (min-width: 400px) { ... }
 
  sr: "480px",
  // => @media (min-width: 400px) { ... }
 
  sm: "640px",
  // => @media (min-width: 640px) { ... }
 
  md: "768px",
  // => @media (min-width: 768px) { ... }
 
  em: "990px",
  // => @media (min-width: 768px) { ... }
 
  lg: "1024px",
  // => @media (min-width: 1024px) { ... }
 
  xl: "1280px",
  // => @media (min-width: 1280px) { ... }
 
  "2xl": "1536px",
  // => @media (min-width: 1536px) { ... }
  },
  boxShadow: {
  blue: "0 4px 14px 0 rgba(19, 51, 81, 0.39)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT:
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
  },
  zIndex: {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  25: 25,
  50: 50,
  75: 75,
  100: 100,
  auto: "auto",
  },
  width: {
  px: "1px",
  "title": "800px",
  "5px": "5px",
  "8px": "8px",
  "44px": "44px",
  "100px": "100px",
  "455px": "455px",
  "720px": "720px",
  0: "0",
  "1/2": "50%",
  "2/4": "50%",
  "3/6": "50%",
  "1/3": "33.333333%",
  "2/6": "33.333333%",
  "1/2": "50%",
  "1/4": "25%",
  "1/5": "20%",
  "1/6": "16.666667%",
  "2/3": "66.666667%",
  "4/6": "66.666667%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/2": "50%",
  "3/4": "75%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  152: "38rem",
  full: "100%",
  screen: "100vw",
  min: "min-content",
  max: "max-content",
  auto: "auto",
  },
  height: {
  "header": "85px",
  "header-big": "140px",
  "44px": "44px",
  "455px": "500px",
  "720px": "720px",
  0: "0",
  "1/2": "50%",
  "2/4": "50%",
  "3/6": "50%",
  "1/3": "33.333333%",
  "2/6": "33.333333%",
  "1/2": "50%",
  "1/4": "25%",
  "1/5": "20%",
  "1/6": "16666667%",
  "2/3": "66.666667%",
  "4/6": "66.666667%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/2": "50%",
  "3/4": "75%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  px: "1px",
  "5px": "5px",
  "8px": "8px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  152: "38rem",
  full: "100%",
  hero: "90vh",
  screen: "100vh",
  auto: "auto",
  },
  maxHeight: {
  "44px": "44px",
  "455px": "455px",
  "720px": "720px",
  0: "0",
  "1/2": "50%",
  "2/4": "50%",
  "3/6": "50%",
  "1/3": "33.333333%",
  "2/6": "33.333333%",
  "1/2": "50%",
  "1/4": "25%",
  "1/5": "20%",
  "1/6": "16666667%",
  "2/3": "66.666667%",
  "4/6": "66.666667%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/2": "50%",
  "3/4": "75%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  px: "1px",
  "5px": "5px",
  "8px": "8px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  152: "38rem",
  full: "100%",
  hero: "90vh",
  screen: "100vh",
  auto: "auto",
  },
  minHeight: {
  "44px": "44px",
  "455px": "455px",
  "720px": "720px",
  0: "0",
  "1/2": "50%",
  "2/4": "50%",
  "3/6": "50%",
  "1/3": "33.333333%",
  "2/6": "33.333333%",
  "1/2": "50%",
  "1/4": "25%",
  "1/5": "20%",
  "1/6": "16666667%",
  "2/3": "66.666667%",
  "4/6": "66.666667%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/2": "50%",
  "3/4": "75%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  px: "1px",
  "5px": "5px",
  "8px": "8px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  152: "38rem",
  full: "100%",
  hero: "90vh",
  screen: "100vh",
  auto: "auto",
  },
  fontSize: {
  px: "1px",
  "2px": "2px",
  "3px": "3px",
  "4px": "4px",
  "5px": "5px",
  "6px": "6px",
  "7px": "7px",
  "8px": "8px",
  "9px": "9px",
  "10px": "10px",
  "11px": "11px",
  "12px": "12px",
  "13x": "13px",
  "14px": "14px",
  "15px": "15px",
  "16px": "16px",
  xxs: ".6rem",
  nav: ".7rem",
  xs: ".75rem",
  sm: ".875rem",
  tiny: ".875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "5rem",
  "8xl": "6rem",
  "9xl": "7rem",
  },
  colors: {
  BACKGROUND1: '#444444',
  BACKGROUND: '#363333',
  SEE_THROUGH: 'rgba(116, 135, 252, 0)',
  FILL_COLOR: ' linear-gradient(90deg, rgba(58,105,180,1) 25%, rgba(69,205,252,1) 75%)',
  ICON_COLOR: '#3C66C4',
  TEXT_COLOR: '#3C66C4',
  RED: 'red',
  ORANGE: '#ff4500',
  LIGHT_ORANGE: '#ffa500',
  BLUE_OPACITY: 'rgba(1, 27, 116, 0.65)',
  BLACK_OPACITY: 'rgba(0, 0, 0, 0.46)',
  BLUE_AF: 'rgba(1, 27, 116, 0.86)',
  YELLOW: '#fff200',
  YELLOW_OPACITY: 'rgba(191, 191, 63, 0.63)',
  BLUE: 'linear-gradient(90deg, rgba(58,105,180,1) 0%, rgba(69,205,252,0.26094227828746175) 100%)',
  GREY: 'grey',
  CIRCULAR_PROGRESS_TINT_COLOR: '#79C8D5',
  CIRCULAR_PROGRESS_BACKGROUND_COLOR: '#BCDFE1',
  MAX_TRACK_COLOR: '#ACDCE1',
  MIN_TRACK_COLOR: '#6DC5D9',
  GREEN: '#37a849',
  BRIGHT_GREEN: '#46e800',
  LIGHT_GREY: '#f7f7f7',
  LIGHT_GREY_OPACITY: 'rgb(227, 242, 253)',
  DARK_GREY: '#5d615e',
  BLACK: '#000000',
  WHITE: '#ffffff',
  WHITEISH: '#f7f7f7',
  TRANSPARENT: 'transparent',
  transparent: "transparent",
  lightestGray: "#FCFCFC",
  },
  extend: {
  lineHeight: {
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "4rem",
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  calm: "3rem",
  loose: "5rem",
  },
  backgroundSize: {
  auto: "auto",
  cover: "cover",
  contain: "contain",
  "50%": "50%",
  16: "4rem",
  },
  backgroundImage: (theme) => ({
  "collectedBG": "url('/src/assets/backgroundupgraded2.png')",
  }),
  },
  },
  plugins: [],
 };