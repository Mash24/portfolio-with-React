/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            h2: {
              fontWeight: '700',
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#111827',
            },
            p: {
              marginBottom: '1.25rem',
              lineHeight: '1.75',
              color: '#374151',
            },
            blockquote: {
              fontStyle: 'italic',
              color: '#6B7280',
              borderLeftColor: '#3B82F6',
            },
            'ol > li::marker': {
              color: '#3B82F6',
              fontWeight: 'bold',
            },
            'ul > li::marker': {
              color: '#3B82F6',
            },
            a: {
              color: '#3B82F6',
              textDecoration: 'underline',
            },
            code: {
              color: '#1F2937',
              backgroundColor: '#F3F4F6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            pre: {
              backgroundColor: '#1F2937',
              color: '#F9FAFB',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
              fontWeight: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}