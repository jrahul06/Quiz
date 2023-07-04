/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
      "./src/**/*.{html,ts,scss}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
//   darkMode:'class',
  theme: {
    extend: {

    //   fontFamily: {
    //     sans: ['Exo2-Light'],
    //     'exo-regular':['Exo2-Regular'],
    //     'exo-medium':['Exo2-Medium'],
    //     'exo-light':['Exo2-ExtraLight'],
    //     'exo-thin':['Exo2-Thin'],
    //     'exo-semibold':['Exo2-SemiBold'],
    //     'exo-bold':['Exo2-Bold'],
    //   },
      
      boxShadow:{
        box:'3px 3px 10px 0px #0000001a',
      },

      borderRadius:{
        '2':'2px',
        DEFAULT:'5px',
      },

      theme: {
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          'tiny': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem',
        }
      },
      gridTemplateColumns: {
        "side-layout": "1fr auto",
        "main-layout": "auto 1fr",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        hyreo: {
          extralight :"#DCF8FF",
          light:"#9EEAFF",
          main:"#22C8F4",
          dark:"#14ABD2",
          extradark:"#0087AC",
        },
        primary:{
          100:"#1C2E64",
          200:"#00248D",
        },
        highlight:{
          100: "#3739bd",
          // 200: "#003AE0",
          // 300: "#3739bd",
          200:"#003EA2",
          400:"#1CB5FF",
          500:"#3EB6EF",
        },
        bg:{
          100: "#FFFFFF",
          200: "#fcfcfc",
          220: "#f8f8f8",
          // 200: "#F4F4F4",
          300: "#F3F0FF",
          400:"#343333",
          500:"#0D0D0D",
          600:"#121212",
          700:"#1B1B1B",
          800:"#000000",
          900:"#1E1E1E",
          150:"#9754A3"

        },
        text:{
          100: "#080c2bd9",
          200: "#080c2bcc",
          300: "#080c2ba6",
          400: "#080c2b73",
          500: "#ffffff"
        },
        danger:{
          100: "#FF0000",
          200: "#FF002C",
        },
        "input" : "#586689",
        "border":'#DBE2E4',
        "border2":'#DBE2E9',
        "icon":'#5b5e72',
        "primary-2": colors.cyan,
        "gray-body":'#f5f5f7',
        "purple":'#5e72e3',
        "crimson":'#DC143C',
        "backdrop":'rgba(0,0,0,.6)',
        tab_bg:{
          100:'#f3f0ff',
          300:"#1B678D",
          200:'#ebe6ff',
        },
        amber: {
          100:'#FFE28A',
          200:'#FFD65C',
          300:'#FFCB2E',
          400:'#f8c015',
         DEFAULT:'#FFBF00'
        },
        blue: {
          100:'#d8eafb',
          200:'#1B678D',
          400:'#285d8f',
          450:'#1e7ca5',
          light: '#85d7ff',
          DEFAULT: '#22c8f4',
          dark: '#009eeb',
          darkest:'#21293e',
        },

        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#fafafd',
          custom:'#abaaaa',
          d8:'#d8dbde',
          f7:'#f7f9fa',
          border:'#e1e1e3',

        },
        green:{
          100:'#e6f1f2',
          400:'#1e5c5f',
          darkest: '#064E3B',
          dark: '#065F46',
          DEFAULT: '#059669',
          light: '#f2f2f2s',
          lightest: '#10B981',
          custom: '#48b49d',

        },
        active:{
          purple:'#2345ad',
        },
      },
      backgroundImage: {
        // 'logo-icon': "url('./assets/images/hyreo/hyreo_logo.svg')",
      },
        backgroundSize:{
          'icon-40':'2rem',
          'icon-35':'1.5rem',
          'icon-30':'1.25rem',
          'icon-20':'1rem',
          'icon-10':'.75rem',
        },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")]
}
