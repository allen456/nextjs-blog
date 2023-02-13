const blogapi = `https://nestjs-blog-api-alen456.vercel.app`;


export const getPosts = async () => {
  const res = await fetch(`${blogapi}/blogs`);
  const posts = await res.json();
  return posts;
};

export const getPostBySlug = async (slug) => {
  const res = await fetch(`${blogapi}/blogs/${slug}`);
  const post = await res.json();
  return post;
};

export const getNextPostBySlug = async (slug) => {
  const res = await fetch(`${blogapi}/blogs`);
  const posts = await res.json();
  const currentPost = posts.find(post => post._id === slug);
  const currentPostIndex = posts.indexOf(currentPost);
  const post = posts[currentPostIndex + 1];
  if (!post) return null;
  return {
    title: post.Title,
    slug: post._id,
  };
};

export const getPreviousPostBySlug = async (slug) => {
  const res = await fetch(`${blogapi}/blogs`);
  const posts = await res.json();
  const currentPost = posts.find(post => post._id === slug);
  const currentPostIndex = posts.indexOf(currentPost);
  const post = posts[currentPostIndex - 1];
  if (!post) return null;
  return {
    title: post.Title,
    slug: post._id,
  };
};
