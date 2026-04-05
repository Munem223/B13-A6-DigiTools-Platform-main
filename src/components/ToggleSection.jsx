function ToggleSection({ activeView, setActiveView }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-14">
      <button
        onClick={() => setActiveView("products")}
        className={`px-6 py-3 rounded-full font-semibold transition ${
          activeView === "products"
            ? "bg-purple-600 text-white"
            : "bg-white text-purple-600 border border-purple-200"
        }`}
      >
        Product
      </button>

      <button
        onClick={() => setActiveView("cart")}
        className={`px-6 py-3 rounded-full font-semibold transition ${
          activeView === "cart"
            ? "bg-purple-600 text-white"
            : "bg-white text-purple-600 border border-purple-200"
        }`}
      >
        Cart
      </button>
    </div>
  );
}

export default ToggleSection;