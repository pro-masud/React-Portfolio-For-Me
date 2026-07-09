import { FiCheck } from "react-icons/fi";

const Price = () => {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$15/mo",
      features: ["1 project", "100MB storage", "Email support"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$45/mo",
      features: ["5 projects", "10GB storage", "Priority support"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Contact",
      features: [
        "Unlimited projects",
        "Unlimited storage",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-emerald-500 rounded-3xl p-8 flex flex-col justify-between transition duration-300 hover:shadow-2xl ring-2 ring-emerald-500/20 dark:ring-emerald-500/10 overflow-hidden ${
                plan.popular ? "ring-2 ring-emerald-500/30 bg-emerald-50" : ""
              }`}
            >
              {plan.popular && (
                <div className="text-xs uppercase text-emerald-600 font-semibold mb-2">
                  Most Popular
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="text-2xl font-bold">{plan.price}</div>
              </div>

              <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-emerald-500" /> <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-3 rounded-full text-sm font-medium ${
                  plan.popular ? "bg-emerald-600 text-white" : "bg-gray-100"
                }`}
              >
                {plan.popular ? "Get started" : "Choose"}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
