const BLOG = require('../blog.config');

// eslint-disable-next-line react/display-name
module.exports = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC';
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC';
    case 'ja':
    case 'ja-jp':
      return 'JP';
    case 'ko':
    case 'ko-kr':
      return 'KR';
    default:
      return null;
  }
};
