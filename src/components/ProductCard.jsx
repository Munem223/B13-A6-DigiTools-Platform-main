function ProductCard({ product, onAddToCart, isAdded }) {
  const tagClasses = {
    popular: "bg-purple-100 text-purple-700",
    new: "bg-green-100 text-green-700",
    "best-seller": "bg-orange-100 text-orange-700",
  };

  return (
    <div className="bg-white rounded-3xl p-6 card-shadow hover:-translate-y-1 transition duration-300">
      <div className="flex items-start justify-between gap-4">
        <img
          src={product.icon}
          alt={product.name}
          className="w-12 h-12 object-contain"
        />

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            tagClasses[product.tagType]
          }`}
        >
          {product.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold mt-5 text-gray-900">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-3 leading-6">{product.description}</p>

      <div className="mt-5">
        <p className="text-3xl font-bold text-purple-700">${product.price}</p>
        <p className="text-sm text-gray-500 capitalize">{product.period}</p>
      </div>

      <ul className="mt-5 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onAddToCart(product)}
        className="primary-btn w-full mt-6"
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
}

export default ProductCard;