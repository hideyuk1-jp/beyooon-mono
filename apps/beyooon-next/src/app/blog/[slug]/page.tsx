import { posts } from '@/utils/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const generateStaticParams = async () => posts.map(({ slug }) => ({ slug }));

export const dynamicParams = false;

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  return (
    <div>
      <h1>Blog Post</h1>
      <h2>{post.metadata.title}</h2>
      <p>{JSON.stringify(post.metadata)}</p>
      <MDXRemote source={post.content} />
    </div>
  );
};
export default BlogPost;
