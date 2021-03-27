const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  async Headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
