import { Link } from "react-router-dom";
import blogFallback from "../assets/image/blog/Blogger-Logo.png";
import blogs from "../json/blogs.json";

const Blog = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-emerald-500 rounded-3xl p-6 flex flex-col justify-between transition duration-300 hover:shadow-2xl ring-2 ring-emerald-500/10 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="mb-5 aspect-[16/9] w-full rounded-2xl object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = blogFallback;
                }}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {post.date} • {post.tags.join(", ")}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to={`/blog/${post.id}`}
                  className="px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
                >
                  Read post
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
