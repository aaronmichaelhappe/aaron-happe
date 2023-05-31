
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    fontFamily: {
      brandon: [
        'Brandon',
        'sans-serif',
      ],
    },

    extend: {
      screens: {
        'xs': '620px',
      },
      colors: {
        themeWarmGray: {
          900: '#231f20',
          800: '#3a393b',
          700: '#4d4d4f',
          600: '#5e5f61',
          500: '#6d6e71',
          400: '#888a8c',
          300: '#afb1b4',
          200: '#c9cacc',
          100: '#e2e3e4',
        },
        themeGray: {
          900: '#1A1A1A',
          800: '#333333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#7F7F7F',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
        },
        themeRed: '#dd583e',
        themeRedRedOrange: "#e46b3f",
        themeRedOrange: '#ea7e3f',
        themeOrange: '#f7a440',
        themeYellow: '#f7cc2c',
        // primaryPink: '#FF2F65',
        // primaryPurple: '#73268B',
        // primaryBlue: '#5570B6',
        // primaryGreen: '#83C451',
        // primaryYellow: '#e89c28',
        // secondaryBurntOrange: '#D72E27',
        // secondaryPurple: '#BC55A0',
        // mutedPrimaryPurple: '#9A4986',
        // lightenedPrimaryPink: "#FF89A1",
        // lightenedPrimaryPurple: "#9B5BAF",
        // lightenedPrimaryBlue: "#819AC7",
        // lightenedPrimaryGreen: "#A3D18B",
        // lightenedPrimaryYellow: "#F5C062",
        // lightenedSecondaryBurntOrange: "#E5534F",
        // lightenedSecondaryPurple: "#D390C8",
        // lightenedMutedPrimaryPurple: "##B57EB0",
        // darkenedPrimaryPink: "#CC0047",
        // darkenedPrimaryPurple: "#521E64",
        // darkenedPrimaryGreen: "#4E8F28",
        // darkenedPrimaryYellow: "#B07000",
        // darkenedSecondaryBurntOrange: "#9B1C1B",
        // darkenedSecondaryPurple: "#7F3F84",
        // darkenedMutedPrimaryPurple: "#63214B"
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ]
};

module.exports = config;