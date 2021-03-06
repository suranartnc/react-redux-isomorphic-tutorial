module.exports = {
  development: {
    isProduction: false,
    host: 'localhost',
    port: 3000,
    clientPort: 3001,
    apiHost: 'localhost',
    apiPort: 3002
  },
  production: {
    isProduction: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT || 3002
  }
}[process.env.NODE_ENV || 'development'];