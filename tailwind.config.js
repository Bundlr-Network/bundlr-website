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
        ghostWhite: '#EEF0F6',
        onyx: '#403F3E',
        smoky: '#0F0F0F'
      },
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace'],
        fkDisplay: ['FKDisplay', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
