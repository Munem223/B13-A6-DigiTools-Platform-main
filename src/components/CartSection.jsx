function CartSection({ cartItems, onRemoveFromCart, onProceedToCheckout }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-8 card-shadow">
        <div className="text-center mb-8">
          <h2 className="section-title">Premium Digital Tools</h2>
          <p className="section-subtitle mt-2">
            Your selected items appear here.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-700">Cart is Empty</h3>
            <p className="text-gray-500 mt-2">
              Please add some products from the product section.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-100 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-500 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-semibold">Total</h4>
                <p className="text-xl font-bold text-purple-700">${totalPrice}</p>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="primary-btn w-full"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CartSection;