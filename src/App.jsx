import { useState } from "react";
import products from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ProductsSection from "./components/ProductsSection";

function App() {
  const [activeView, setActiveView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (!exists) {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <StatsSection />

      <div className="container-custom">
        <ProductsSection
          products={products}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}

export default App;