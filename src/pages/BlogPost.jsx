import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import blogFallback from "../assets/image/blog/Blogger-Logo.png";
import blogs from "../json/blogs.json";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <section className="container mx-auto px-4 py-8">
        <p className="text-center">Post not found.</p>
        <div className="text-center mt-4">
          <Link to="/blog" className="text-emerald-500 underline">
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-md">
      <div className="container mx-auto">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500 text-emerald-500 hover:bg-emerald-50 transition"
        >
          <FiArrowLeft /> Back
        </Link>

        <figure className="mb-8 overflow-hidden rounded-3xl border border-gray-300 bg-gray-100 shadow-lg dark:border-emerald-500 dark:bg-gray-900">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="aspect-[16/9] w-full object-cover"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = blogFallback;
            }}
          />
          <figcaption className="px-4 py-3 text-xs tracking-wide text-gray-500 dark:text-gray-400">
            Featured image
          </figcaption>
        </figure>

        <article className="mx-auto max-w-4xl">
          <header className="mb-8 border-b border-gray-200 pb-6 dark:border-gray-800">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {post.excerpt}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              {" | "} {post.tags.join(", ")}
            </p>
          </header>

          <div className="prose max-w-none dark:prose-invert">
            {post.content.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
