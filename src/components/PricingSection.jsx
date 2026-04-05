function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["Basic tools", "Limited products", "Community support"],
      highlight: false,
    },
    {
      id: 2,
      name: "Pro",
      price: "$29",
      description: "Best for active users",
      features: ["Premium products", "Priority access", "Regular updates"],
      highlight: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$99",
      description: "For teams and business use",
      features: ["All pro features", "Team access", "Dedicated support"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="text-center">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle mt-3">
          Choose a plan based on your workflow and product usage.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-8 card-shadow ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-600 to-fuchsia-600 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className={`mt-3 ${plan.highlight ? "text-purple-100" : "text-gray-500"}`}>
              {plan.description}
            </p>

            <h4 className="text-4xl font-bold mt-6">{plan.price}</h4>
            <p className={`mt-1 ${plan.highlight ? "text-purple-100" : "text-gray-500"}`}>
              per month
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm">
                  • {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-full py-3 font-semibold ${
                plan.highlight
                  ? "bg-white text-purple-700"
                  : "bg-purple-600 text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;