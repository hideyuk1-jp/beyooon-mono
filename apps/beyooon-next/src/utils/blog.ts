import { globbySync } from 'globby';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

type Metadata = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
};

type Post = {
  slug: string;
  metadata: Metadata;
  content: string;
};

const parseFrontmatter = (fileContent: string): Omit<Post, 'slug'> => {
  const { content, data: metadata } = matter(fileContent);
  return {
    metadata: metadata as Metadata,
    content,
  };
};

const getMDXData = (dir: string): Post[] => {
  const files = globbySync(`${dir}/*/*.{md,mdx}`);
  return files.map((file) => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const { metadata, content } = parseFrontmatter(fileContent);
    const slug = path.dirname(file).split(path.sep).pop() || '';
    return {
      slug,
      metadata,
      content,
    };
  });
};

const getPosts = (): Post[] => getMDXData(path.join(process.cwd(), 'posts'));

export const posts = getPosts();
