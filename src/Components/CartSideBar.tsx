interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: any[];
  onRemove: (index: number) => void; // Add this to your interface
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemove,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white z-300 shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
          <button
            onClick={onClose}
            className="text-2xl font-light hover:text-gray-500"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-gray-50 rounded"
                  />
                  <div>
                    <h4 className="font-bold text-sm leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs">{item.price}</p>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => onRemove(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors text-xs underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Checkout Button */}
        <div className="border-t pt-4 mt-4">
          <button className="w-full bg-black text-white py-3 font-bold rounded hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
