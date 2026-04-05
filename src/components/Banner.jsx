import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <section id="home" className="bg-white">
      <div className="container-custom py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-5">
            AI Powered Productivity Hub
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="text-gray-600 mt-5 text-base leading-7 max-w-xl">
            Access premium digital tools, templates and smart resources to improve
            your workflow, creativity and online productivity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="primary-btn">Explore Products</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full max-w-md rounded-3xl object-cover card-shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;