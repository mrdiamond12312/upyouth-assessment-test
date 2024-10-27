export default {
  content: [
    './src/pages/**/*.tsx',
    './src/pages/**/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './index.html',
    './src/loading.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui,sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        serif: ['ui-serif'],
      },
      keyframes: {
        frameAnimation: {
          '0%': {
            'background-position': '0 0',
          },
          '100%': {
            'background-position': '0 -3000%',
          },
        },
      },

      animation: {
        spriteAnimation: 'frameAnimation 0.5s steps(30) infinite forwards',
      },

      colors: {
        transparent: 'transparent',

        'neutral-1': '#FFFFFF',
        'neutral-2': '#F5F6FA',
        'neutral-3': '#EBECF0',
        'neutral-4': '#D4D5D9',
        'neutral-5': '#BBBCBF',
        'neutral-6': '#8A8B8C',
        'neutral-7': '#575859',
        'neutral-8': '#414142',
        'neutral-9': '#2A2A2B',
        'neutral-10': '#000D0B',
      },

      fontSize: {
        'heading-1': ['6rem', { lineHeight: '1', fontWeight: '700' }],
        'heading-2': ['5.25rem', { lineHeight: '1', fontWeight: '700' }],
        'heading-3': ['4.5rem', { lineHeight: '1', fontWeight: '700' }],
        'heading-4': ['3.75rem', { lineHeight: '1', fontWeight: '700' }],
        'heading-5': ['2.25rem', { lineHeight: '1', fontWeight: '700' }],

        'body-1-semibold': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'body-1-medium': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        'body-1-regular': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],

        'body-2-semibold': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        'body-2-medium': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        'body-2-regular': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],

        'body-3-semibold': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        'body-3-medium': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'body-3-regular': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],

        borderRadius: {
          default: '4px',
        },
      },
    },
  },
  plugins: [],
};
