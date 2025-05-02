import { getAllPostSlugs } from '@/utils/get-all-post-slugs';
export const generateStaticParams = () =>
  getAllPostSlugs().map((slug) => ({
    slug,
  }));

export const dynamicParams = false;

export const BlogPost = async ({ params }: Readonly<{ params: Promise<{ slug: string }> }>) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog Post</h1>
      <h2>{slug}</h2>
    </div>
  );
};
export default BlogPost;
