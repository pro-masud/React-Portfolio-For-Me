import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "hello@masudrana.dev",
      hint: "Best for project inquiries",
    },
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Phone",
      value: "+880 1700 000 000",
      hint: "Available for quick calls",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      hint: "Open to remote collaboration",
    },
  ];

  return (
    <section className="px-2 py-8 sm:px-4 lg:px-6 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1d2939] via-[#233447] to-[#6ebd97] p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-10 lg:p-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_45%)]" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-emerald-200 backdrop-blur">
              Let&apos;s work together
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Ready to build something stunning and meaningful?
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              I&apos;m available for freelance projects, creative
              collaborations, and full-time opportunities. Share your idea and
              I&apos;ll help turn it into a polished digital experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@masudrana.dev"
                className="inline-flex items-center gap-2 rounded-full bg-secondary-ur px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Start a conversation
                <FaArrowRight />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-none sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Send a message
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Tell me a bit about your project and I’ll get back to you shortly.
          </p>

          <form className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="mb-2 block">Your Name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary-ur focus:ring-2 focus:ring-emerald-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="mb-2 block">Your Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary-ur focus:ring-2 focus:ring-emerald-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              <span className="mb-2 block">What are you building?</span>
              <input
                type="text"
                placeholder="Website, app, brand identity..."
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary-ur focus:ring-2 focus:ring-emerald-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              <span className="mb-2 block">Project Details</span>
              <textarea
                rows="5"
                placeholder="Tell me about your goals, timeline, and preferred style..."
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-secondary-ur focus:ring-2 focus:ring-emerald-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-primary-ur px-5 py-3 font-semibold text-white transition hover:bg-slate-700 dark:bg-secondary-ur dark:text-white dark:hover:bg-emerald-500"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {contactDetails.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 shadow-sm shadow-slate-200/70 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              {item.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {item.hint}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
