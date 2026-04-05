import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

function StepsSection() {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      description: "Sign up and access the full digital tools platform.",
      icon: userIcon,
    },
    {
      id: 2,
      title: "Choose Products",
      description: "Explore premium products and add the best ones to cart.",
      icon: packageIcon,
    },
    {
      id: 3,
      title: "Start Using",
      description: "Checkout and instantly start improving your workflow.",
      icon: rocketIcon,
    },
  ];

  return (
    <section id="steps" className="py-16">
      <div className="text-center">
        <h2 className="section-title">Get Started in 3 Steps</h2>
        <p className="section-subtitle mt-3">
          A simple process to access premium digital tools and start working smarter.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-3xl p-8 text-center card-shadow"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
              <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
            </div>

            <h3 className="text-xl font-bold mt-5">{step.title}</h3>
            <p className="text-gray-600 mt-3 text-sm leading-6">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;