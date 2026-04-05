function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container-custom py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Digi<span className="text-purple-600">Tools</span>
          </h2>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#steps">How it Works</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-700"
          >
            <CartIcon />
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1">
              {cartCount}
            </span>
          </button>

          <button className="primary-btn hidden sm:block">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;