import { posts } from '@/utils/blog';
import Link from 'next/link';

const Blog = async () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blog;
