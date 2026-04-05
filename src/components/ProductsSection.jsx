import ProductCard from "./ProductCard";

function ProductsSection({ products, onAddToCart, cartItems }) {
  return (
    <section id="products" className="py-16">
      <div className="text-center">
        <h2 className="section-title">Premium Digital Tools</h2>
        <p className="section-subtitle mt-3">
          Choose the right digital products to improve workflow, design,
          writing, business operations and online growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        {products.map((product) => {
          const isAdded = cartItems.some((item) => item.id === product.id);

          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isAdded={isAdded}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductsSection;