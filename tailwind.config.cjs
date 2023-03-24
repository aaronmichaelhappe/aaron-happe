
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
        themegray: {
          900: '#020202',
          800: '#191919',
          700: '#2b2a2b',
          600: '#3f3f3f',
          500: '#515151',
          400: '#606060',
          300: '#a5a3a5',
          200: '#c9c9c9',
          100: '#f4f4f4',
        },
        primaryPink: '#FF2F65',
        primaryPurple: '#73268B',
        primaryBlue: '#5570B6',
        primaryGreen: '#83C451',
        primaryYellow: '#e89c28',
        secondaryBurntOrange: '#D72E27',
        secondaryPurple: '#BC55A0',
        mutedPrimaryPurple: '#9A4986',
        lightenedPrimaryPink: "#FF89A1",
        lightenedPrimaryPurple: "#9B5BAF",
        lightenedPrimaryBlue: "#819AC7",
        lightenedPrimaryGreen: "#A3D18B",
        lightenedPrimaryYellow: "#F5C062",
        lightenedSecondaryBurntOrange: "#E5534F",
        lightenedSecondaryPurple: "#D390C8",
        lightenedMutedPrimaryPurple: "##B57EB0",
        darkenedPrimaryPink: "#CC0047",
        darkenedPrimaryPurple: "#521E64",
        darkenedPrimaryGreen: "#4E8F28",
        darkenedPrimaryYellow: "#B07000",
        darkenedSecondaryBurntOrange: "#9B1C1B",
        darkenedSecondaryPurple: "#7F3F84",
        darkenedMutedPrimaryPurple: "#63214B"
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ]
};

module.exports = config;