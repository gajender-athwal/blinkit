import React from "react";

export default function Cart({
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
}) {
    if (!isCartOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50">

            {/* Background */}
            <div
                onClick={closeCart}
                className="absolute inset-0 bg-black/40"
            ></div>

            {/* Cart Drawer */}
            <div
                className="
          absolute
          right-0
          top-0
          h-full
          w-full
          sm:w-[420px]
          bg-white
          shadow-2xl
          flex
          flex-col
        "
            >

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b">

                    <div>
                        <h2 className="text-xl font-bold">
                            My Cart
                        </h2>

                        <p className="text-sm text-gray-500">
                            {cartCount} item{cartCount !== 1 ? "s" : ""}
                        </p>
                    </div>



                    <button onClick={closeCart} className="rounded-full text-xl flex items-center justify-center" >
                        <span className="flex-1">⬆️ BACK </span>

                    </button>


                    

                </div>

                {/* Products */}
                <div className="flex-1 overflow-y-auto p-5">

                    {cart.length === 0 ? (

                        <div className="h-full flex flex-col items-center justify-center">

                            <div className="text-6xl mb-4">
                                🛒
                            </div>

                            <h3 className="text-lg font-semibold">
                                Your cart is empty
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Add some products first
                            </p>

                        </div>

                    ) : (

                        <div className="space-y-5">

                            {cart.map((item) => (

                                <div
                                    key={item.id}
                                    className="flex gap-3 border-b pb-4"
                                >

                                    {/* Image */}
                                    <div className="w-20 h-20 bg-gray-50 rounded-xl [flex-shrink-0]">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain p-2"
                                        />

                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">

                                        <h3 className="text-sm font-semibold text-gray-800">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            ₹{item.price}
                                        </p>

                                        {/* Quantity */}
                                        <div className="flex items-center justify-between mt-3">

                                            <div className="flex items-center border border-green-600 rounded-lg overflow-hidden">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(item.id)
                                                    }
                                                    className="px-3 py-1 text-green-600 font-bold hover:bg-green-50"
                                                >
                                                    −
                                                </button>

                                                <span className="px-3 font-semibold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(item.id)
                                                    }
                                                    className="px-3 py-1 text-green-600 font-bold hover:bg-green-50"
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <span className="font-bold">
                                                ₹{item.price * item.quantity}
                                            </span>

                                        </div>

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="text-xs text-red-500 mt-2 hover:text-red-700"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                {/* Bottom */}
                {cart.length > 0 && (
                    <div className="border-t p-5 bg-white">

                        <div className="flex justify-between items-center mb-4">

                            <span className="text-lg font-semibold">
                                Total
                            </span>

                            <span className="text-2xl font-bold text-green-600">
                                ₹{cartTotal}
                            </span>

                        </div>

                        <button
                            className="
                w-full
                bg-green-600
                hover:bg-green-700
                text-white
                py-3
                rounded-xl
                font-bold
                transition
              "
                        >
                            Proceed to Checkout
                        </button>

                    </div>
                )}

            </div>

        </div>
    );
}