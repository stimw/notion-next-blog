const BLOG = require('./blog.config');

module.exports = {
  siteUrl: BLOG.link,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${BLOG.link}/server-sitemap.xml`],
  },
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
};
