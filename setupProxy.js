const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=visa&token=e26c031fb362046e4232370c8cb5ae70',
      changeOrigin: true,
    })
  );
};