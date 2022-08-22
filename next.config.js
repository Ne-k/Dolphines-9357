const path = require("path");

module.exports = {
  async redirects() {
    return [

      {
        source: '/github',
        destination: 'https://github.com/FTC-Dolphines-9357',
        permanent: true
      },

      {
        source: '/2021JC1',
        destination: '/2021_JimCarrey1.png',
        permanent: true
      },
      {
        source: '/2021JC2',
        destination: '/2021_JimCarrey2.png',
        permanent: true
      },
      {
        source: '/2022JC1',
        destination: '/2022_JimCarrey1.png',
        permanent: true
      },
      {
        source: '/2022JC2',
        destination: '/2022_JimCarrey2.png',
        permanent: true
      }
    ]
  },

  /*
  rewrites: async () => {
    // In order to support wildcard subdomains with different content, use a "rewrite" to include the host in the path
    return [
      {
        source: '/:path*{/}?',
        has: [
          {
            type: 'host',
            value: '(?<siteHost>.*)',
          },
        ],
        destination: '/site/:siteHost/:path*',
      },
    ];
  },

   */

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
  },
};
