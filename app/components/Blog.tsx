import { BlogPosts } from "./posts";

function Blog() {
  return (
    <section id="blog" className="max-w-5xl my-16">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <BlogPosts />
    </section>
  );
}

export default Blog;
