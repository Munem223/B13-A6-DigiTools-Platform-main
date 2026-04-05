import { useState } from "react";
import products from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";
import ToggleSection from "./components/ToggleSection";

function App() {
  const [activeView, setActiveView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (!exists) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleProceedToCheckout = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <StatsSection />

      <div className="container-custom">
        <ToggleSection activeView={activeView} setActiveView={setActiveView} />

        {activeView === "products" ? (
          <ProductsSection
            products={products}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        ) : (
          <CartSection
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
            onProceedToCheckout={handleProceedToCheckout}
          />
        )}
      </div>
    </div>
  );
}

export default App;