import { useState } from "react";
import products from "./data/products";

function App() {
  const [activeView, setActiveView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10">DigiTools</h1>

      <div className="container-custom mt-8">
        <p className="text-center">Products: {products.length}</p>
        <p className="text-center">Cart Items: {cartItems.length}</p>
        <p className="text-center">Active View: {activeView}</p>
      </div>
    </div>
  );
}

export default App;