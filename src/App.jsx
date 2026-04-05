import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import products from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";
import ToggleSection from "./components/ToggleSection";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  const [activeView, setActiveView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      toast.info(`${product.name} is already in cart`);
      return;
    }

    setCartItems([...cartItems, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    toast.error("Product removed from cart");
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Cart is already empty");
      return;
    }

    setCartItems([]);
    toast.success("Proceed to checkout successful");
  };

  return (
    <div>
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setActiveView("cart")}
      />

      <Banner />
      <StatsSection />

      <main className="container-custom">
        <ToggleSection
          activeView={activeView}
          setActiveView={setActiveView}
        />

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

        <StepsSection />
        <PricingSection />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;