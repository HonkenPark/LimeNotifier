// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/hotdeal', {
      target: 'https://f3e7-222-112-77-160.ngrok-free.app',
      changeOrigin: true,
    }),
  );
};