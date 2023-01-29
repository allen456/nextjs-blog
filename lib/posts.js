import { remark } from 'remark';
import html from 'remark-html';

const blogapi = `https://nestjs-blog-api-alen456.vercel.app/`;

export async function getAllBlogsData() {
  const res = await fetch(`${blogapi}blogs`);
  const data = await res.json();
  return data;
}

export async function getBlogsData(id) {
  const res = await fetch(`${blogapi}blogs/${id}`);
  const data = await res.json();
  const processedContent = await remark().use(html).process(data.Content);
  return {
    _id: data._id,
    BlogDate: data.BlogDate,
    Title: data.Title,
    Content: processedContent.toString()
  };
}