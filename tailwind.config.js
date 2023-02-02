const BLOG = require('./blog.config');
const { fontFamily } = require('tailwindcss/defaultTheme');
const CJK = require('./lib/cjk');
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`];

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff',
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827',
        },
        primary: '#c792ea',
      },
      fontFamily: {
        sans: ['"Open Sans"', ...fontFamily.sans, ...fontSansCJK],
        title: ['Montserrat', ...fontFamily.sans, ...fontSansCJK],
      },
      boxShadow: {
        solid: '3px 3px 0 #111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
