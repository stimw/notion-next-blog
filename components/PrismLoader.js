import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader';
import BLOG from '@/blog.config';

const PrismLoader = () => {
  useEffect(() => {
    Prism.plugins.autoloader.languages_path =
      BLOG.prismjs_cdn ||
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
    Prism.highlightAll();
  });
};

export default PrismLoader;
