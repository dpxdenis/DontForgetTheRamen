const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7106';

const PROXY_CONFIG = [
  {
    context: [
      "/api/ShoppingListItem",
    ],
    target,
    secure: false
  },
  {
    context: [
      "/hub/shoppingitem"
    ],
    target,
    secure: false,
    ws: true
  }
]

module.exports = PROXY_CONFIG;
