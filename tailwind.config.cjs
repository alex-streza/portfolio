const defaultTheme = {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    main: {
      0: 'hsla(169, 65%, 88%, 1)',
      100: 'hsla(169, 65%, 83%, 1)',
      200: 'hsla(169, 65%, 78%, 1)',
      300: 'hsla(169, 65%, 73%, 1)',
      400: 'hsla(169, 65%, 68%, 1)',
      DEFAULT: 'hsla(169, 65%, 63%, 1)',
      600: 'hsla(169, 65%, 58%, 1)',
      700: 'hsla(169, 65%, 53%, 1)',
      800: 'hsla(169, 65%, 48%, 1)',
      900: 'hsla(169, 65%, 43%, 1)',
      1000: 'hsla(169, 65%, 38%, 1)',
      transparent: 'rgba(99, 222, 199, 0.8)',
      hex: '#63DEC7',
    },
    green: {
      0: 'hsla(169, 65%, 88%, 1)',
      100: 'hsla(169, 65%, 83%, 1)',
      200: 'hsla(169, 65%, 78%, 1)',
      300: 'hsla(169, 65%, 73%, 1)',
      400: 'hsla(169, 65%, 68%, 1)',
      DEFAULT: 'hsla(169, 65%, 63%, 1)',
      600: 'hsla(169, 65%, 58%, 1)',
      700: 'hsla(169, 65%, 53%, 1)',
      800: 'hsla(169, 65%, 48%, 1)',
      900: 'hsla(169, 65%, 43%, 1)',
      1000: 'hsla(169, 65%, 38%, 1)',
      transparent: 'rgba(99, 222, 199, 0.8)',
      hex: '#63DEC7',
    },
    purple: {
      0: 'hsla(245, 96%, 88%, 1)',
      100: 'hsla(245, 96%, 83%, 1)',
      200: 'hsla(245, 96%, 78%, 1)',
      300: 'hsla(245, 96%, 73%, 1)',
      400: 'hsla(245, 96%, 68%, 1)',
      DEFAULT: 'hsla(245, 96%, 63%, 1)',
      600: 'hsla(245, 96%, 58%, 1)',
      700: 'hsla(245, 96%, 53%, 1)',
      800: 'hsla(245, 96%, 48%, 1)',
      900: 'hsla(245, 96%, 43%, 1)',
      1000: 'hsla(245, 96%, 38%, 1)',
      transparent: 'hsla(245, 96%, 63%, 0.8)',
      hex: '#5546FB',
    },
    red: {
      0: 'hsla(0, 96%, 88%, 1)',
      100: 'hsla(0, 96%, 83%, 1)',
      200: 'hsla(0, 96%, 78%, 1)',
      300: 'hsla(0, 96%, 73%, 1)',
      400: 'hsla(0, 96%, 68%, 1)',
      DEFAULT: 'hsla(0, 96%, 63%, 1)',
      600: 'hsla(0, 96%, 58%, 1)',
      700: 'hsla(0, 96%, 53%, 1)',
      800: 'hsla(0, 96%, 48%, 1)',
      900: 'hsla(0, 96%, 43%, 1)',
      1000: 'hsla(0, 96%, 38%, 1)',
      transparent: 'rgba(251, 70, 70, 0.8)',
    },
    blue: {
      0: 'hsla(218, 96%, 88%, 1)',
      100: 'hsla(218, 96%, 83%, 1)',
      200: 'hsla(218, 96%, 78%, 1)',
      300: 'hsla(218, 96%, 73%, 1)',
      400: 'hsla(218, 96%, 68%, 1)',
      DEFAULT: 'hsla(218, 96%, 63%, 1)',
      600: 'hsla(218, 96%, 58%, 1)',
      700: 'hsla(218, 96%, 53%, 1)',
      800: 'hsla(218, 96%, 48%, 1)',
      900: 'hsla(218, 96%, 43%, 1)',
      1000: 'hsla(218, 96%, 38%, 1)',
      transparent: 'rgba(70, 136, 251, 0.8)',
    },
    yellow: {
      0: 'hsla(43, 96%, 88%, 1)',
      100: 'hsla(43, 96%, 83%, 1)',
      200: 'hsla(43, 96%, 78%, 1)',
      300: 'hsla(43, 96%, 73%, 1)',
      400: 'hsla(43, 96%, 68%, 1)',
      DEFAULT: 'hsla(43, 96%, 63%, 1)',
      600: 'hsla(43, 96%, 58%, 1)',
      700: 'hsla(43, 96%, 53%, 1)',
      800: 'hsla(43, 96%, 48%, 1)',
      900: 'hsla(43, 96%, 43%, 1)',
      1000: 'hsla(43, 96%, 38%, 1)',
      transparent: 'rgba(251, 200, 70, 0.8)',
      hex: '#FBC846',
    },
    white: {
      DEFAULT: '#F2F2F2',
    },
    gray: {
      100: 'hsla(0, 0%, 52%, 1)',
      200: 'hsla(0, 0%, 47%, 1)',
      300: 'hsla(0, 0%, 42%, 1)',
      400: 'hsla(0, 0%, 37%, 1)',
      DEFAULT: 'hsla(0, 0%, 32%, 1)',
      600: 'hsla(0, 0%, 27%, 1)',
      700: 'hsla(0, 0%, 22%, 1)',
      800: 'hsla(0, 0%, 17%, 1)',
      900: 'hsla(0, 0%, 12%, 1)',
      1000: 'hsla(0, 0%, 7%, 1)',
      hex: '#1F1F1F',
    },
    'light-gray': {
      600: 'hsla(0, 0%, 90%, 1)',
      700: 'hsla(0, 0%, 80%, 1)',
      800: 'hsla(0, 0%, 70%, 1)',
    },
    info: {
      0: 'hsla(218, 96%, 88%, 1)',
      100: 'hsla(218, 96%, 83%, 1)',
      200: 'hsla(218, 96%, 78%, 1)',
      300: 'hsla(218, 96%, 73%, 1)',
      400: 'hsla(218, 96%, 68%, 1)',
      DEFAULT: 'hsla(218, 96%, 63%, 1)',
      600: 'hsla(218, 96%, 58%, 1)',
      700: 'hsla(218, 96%, 53%, 1)',
      800: 'hsla(218, 96%, 48%, 1)',
      900: 'hsla(218, 96%, 43%, 1)',
      1000: 'hsla(218, 96%, 38%, 1)',
      transparent: 'rgba(70, 136, 251, 0.8)',
    },
    success: {
      0: 'hsla(169, 65%, 88%, 1)',
      100: 'hsla(169, 65%, 83%, 1)',
      200: 'hsla(169, 65%, 78%, 1)',
      300: 'hsla(169, 65%, 73%, 1)',
      400: 'hsla(169, 65%, 68%, 1)',
      DEFAULT: 'hsla(169, 65%, 63%, 1)',
      600: 'hsla(169, 65%, 58%, 1)',
      700: 'hsla(169, 65%, 53%, 1)',
      800: 'hsla(169, 65%, 48%, 1)',
      900: 'hsla(169, 65%, 43%, 1)',
      1000: 'hsla(169, 65%, 38%, 1)',
      transparent: 'rgba(99, 222, 199, 0.8)',
    },
    warning: {
      0: 'hsla(43, 96%, 88%, 1)',
      100: 'hsla(43, 96%, 83%, 1)',
      200: 'hsla(43, 96%, 78%, 1)',
      300: 'hsla(43, 96%, 73%, 1)',
      400: 'hsla(43, 96%, 68%, 1)',
      DEFAULT: 'hsla(43, 96%, 63%, 1)',
      600: 'hsla(43, 96%, 58%, 1)',
      700: 'hsla(43, 96%, 53%, 1)',
      800: 'hsla(43, 96%, 48%, 1)',
      900: 'hsla(43, 96%, 43%, 1)',
      1000: 'hsla(43, 96%, 38%, 1)',
      transparent: 'rgba(251, 200, 70, 0.8)',
    },
    error: {
      0: 'hsla(0, 96%, 88%, 1)',
      100: 'hsla(0, 96%, 83%, 1)',
      200: 'hsla(0, 96%, 78%, 1)',
      300: 'hsla(0, 96%, 73%, 1)',
      400: 'hsla(0, 96%, 68%, 1)',
      DEFAULT: 'hsla(0, 96%, 63%, 1)',
      600: 'hsla(0, 96%, 58%, 1)',
      700: 'hsla(0, 96%, 53%, 1)',
      800: 'hsla(0, 96%, 48%, 1)',
      900: 'hsla(0, 96%, 43%, 1)',
      1000: 'hsla(0, 96%, 38%, 1)',
      transparent: 'rgba(251, 70, 70, 0.8)',
    },
  },
  fontFamily: {
    sans: ['PP Pangram Sans', 'sans-serif'],
    serif: ['PP Migra', 'serif'],
  },
  boxShadow: {
    main: '0px 0px 4px 4px hsla(169, 65%, 63%, 0.5)',
    green: '0px 0px 4px 4px rgba(99, 222, 199, 0.5)',
    red: '0px 0px 4px 4px rgba(251, 70, 70, 0.5)',
    blue: '0px 0px 4px 4px rgba(70, 136, 251, 0.5)',
    none: 'none',
    yellow: '0px 0px 4px 4px rgba(251, 200, 70, 0.5)',
  },
  borderRadius: {
    2: '2px',
    DEFAULT: '4px',
    8: '8px',
    16: '16px',
    32: '32px',
    full: '50%',
  },
  animation: {
    'fade-out': 'fadeOut 0.5s ease-in-out',
    'fade-in': 'fadeIn 0.5s ease-in-out',
  },
}

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    ...defaultTheme,
    keyframes: (theme) => ({
      fadeOut: {
        '100%': { opacity: theme('opacity.0') },
        '0%': { opacity: theme('opacity.100') },
      },
      fadeIn: {
        '0%': { opacity: theme('opacity.0') },
        '100%': { opacity: theme('opacity.100') },
      },
    }),
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-themer')({
      defaultTheme: {
        ...defaultTheme,
        extend: {
          ...defaultTheme,
          colors: {
            main: defaultTheme.colors.gray,
          },
        },
      },
      themes: [
        {
          name: 'developer',
          extend: {
            ...defaultTheme,
            colors: {
              main: defaultTheme.colors.green,
            },
          },
        },
        {
          name: 'designer',
          extend: {
            ...defaultTheme,
            colors: {
              main: defaultTheme.colors.purple,
            },
          },
        },
        {
          name: 'writer',
          extend: {
            ...defaultTheme,
            colors: {
              main: defaultTheme.colors.yellow,
            },
          },
        },
      ],
    }),
  ],
  safelist: ['md:px-32'],
}
