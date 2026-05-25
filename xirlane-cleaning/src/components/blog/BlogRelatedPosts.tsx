import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/blog-types";

type BlogRelatedPostsProps = {
  posts: BlogPost[];
};

export default function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border-light bg-section-alt-bg py-16 md:py-20" aria-labelledby="related-posts-heading">
      <div className="site-container">
        <h2 id="related-posts-heading" className="text-h2-mobile text-text-primary md:text-h2">
          Related Articles
        </h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
