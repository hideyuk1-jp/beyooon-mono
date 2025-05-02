import fs from 'node:fs';
import path from 'node:path';

/** postsディレクトリ配下のディレクトリを取得 */
export const getAllPostSlugs = () => fs.readdirSync(path.resolve(process.cwd(), 'posts'));
