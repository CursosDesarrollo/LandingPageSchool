const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    outDir: path.resolve(__dirname, 'dist')
  },
  server: {
    port: 3000,
    hot: true
  }
}