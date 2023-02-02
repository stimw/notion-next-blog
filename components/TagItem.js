import Link from 'next/link';

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <p className="mr-1 dark:border-gray-600 hover:text-primary transition duration-300">
      #{tag}
    </p>
  </Link>
);

export default TagItem;
