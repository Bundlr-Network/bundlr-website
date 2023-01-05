module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        timberwolf: '#D8CFCA',
        seashell: '#FEF4EE',
        ghostWhite: '#EEF0F6'
      },
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace']
      }
    }
  },
  plugins: []
}
