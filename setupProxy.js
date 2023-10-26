const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://render-api-mow9.onrender.com',
      changeOrigin: true,
    })
  );
};
