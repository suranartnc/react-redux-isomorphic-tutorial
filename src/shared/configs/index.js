const environment = {
  development: {
    isProduction: false,
    host: 'localhost',
    port: 3000,
    apiHost: 'localhost',
    apiPort: 3001
  },
  production: {
    isProduction: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT || 3001
  }
}[process.env.NODE_ENV || 'development'];

export default {
  ...environment
};