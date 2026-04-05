import { useState } from "react";
import products from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";

function App() {
  const [activeView, setActiveView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <StatsSection />

      <div className="container-custom mt-10 pb-10">
        <p className="text-center">Products: {products.length}</p>
        <p className="text-center">Cart Items: {cartItems.length}</p>
        <p className="text-center">Active View: {activeView}</p>
      </div>
    </div>
  );
}

export default App;