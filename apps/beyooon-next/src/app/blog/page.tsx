import { getAllPostSlugs } from '@/utils/get-all-post-slugs';
import Link from 'next/link';

const Blog = () => {
  const slugs = getAllPostSlugs();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blog;
