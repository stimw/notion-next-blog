import Link from 'next/link';
import BLOG from '@/blog.config';
import formatDate from '@/lib/formatDate';
import TagItem from '@/components/TagItem';

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-col justify-between gap-1">
        <div className="flex text-gray-800 dark:text-gray-400 gap-1">
          <time className="flex-shrink-0">
            {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
          </time>
          {post.tags ? <div>in</div> : <></>}
          <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
            {post.tags?.map((tag) => (
              <TagItem key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <Link href={`${BLOG.path}/blog/${post.slug}`}>
          <div className="text-lg md:text-2xl font-title font-semibold mb-2 text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition duration-300">
            {post.title}
          </div>
        </Link>
      </header>
      {BLOG.showSummary ? (
        <main>
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
      ) : (
        <div></div>
      )}
    </article>
  );
};

export default BlogPost;
