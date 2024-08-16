import fs from 'fs';
import path from 'path';

export const getBlogData = () => {
  const dataPath = path.join(process.cwd(), 'data/blogData.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const posts = JSON.parse(fileContents);
  return posts;
};
