import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
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
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-md">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500 text-emerald-500 hover:bg-emerald-50 transition"
        >
          <FiArrowLeft /> Back
        </Link>

        <article className="prose dark:prose-invert">
          <h1>{post.title}</h1>
          <p className="text-sm text-gray-500">
            {post.date} • {post.tags.join(", ")}
          </p>
          {post.content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
