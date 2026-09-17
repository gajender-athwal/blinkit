import React, { useState } from "react";
import Header from "./component/Header";
import Imgsection from "./component/Imgsection";
import Card from "./component/Card";
import SliderSection from "./component/SliderSection";
import Footer from "./component/Footer";
import Cart from "./component/Cart";

export default function App() {
  const [cards] = useState([
    { id: 1, title: "Paan Corner", image: "/imgi_5_paan-corner_web.png" },
    { id: 2, title: "Dairy, Bread & Eggs", image: "/imgi_6_Slice-2_10.png" },
    { id: 3, title: "Fruits & Vegetables", image: "/imgi_7_Slice-3_9.png" },
    { id: 4, title: "Cold Drinks & Juices", image: "/imgi_8_Slice-4_9.png" },
    { id: 5, title: "Snacks & Munchies", image: "/imgi_9_Slice-5_4.png" },
    { id: 6, title: "Breakfast & Instant Food", image: "/imgi_10_Slice-6_5.png" },
    { id: 7, title: "Sweet Tooth", image: "/imgi_11_Slice-7_3.png" },
    { id: 8, title: "Bakery & Biscuits", image: "/imgi_12_Slice-8_4.png" },
    { id: 9, title: "Tea, Coffee & Milk Drinks", image: "/imgi_13_Slice-7-1_0.png" },
    { id: 10, title: "Atta, Rice & Dal", image: "/imgi_14_Slice-10.png" },
    { id: 11, title: "Masala, Oil & More", image: "/imgi_15_Slice-11.png" },
    { id: 12, title: "Sauces & Spreads", image: "/imgi_16_Slice-12.png" },
    { id: 13, title: "Chicken, Meat & Fish", image: "/imgi_17_Slice-13.png" },
    { id: 14, title: "Organic & Healthy Living", image: "/imgi_18_Slice-14.png" },
    { id: 15, title: "Baby Care", image: "/imgi_19_Slice-15.png" },
    { id: 16, title: "Pharma & Wellness", image: "/imgi_20_Slice-16.png" },
    { id: 17, title: "Cleaning Essentials", image: "/imgi_21_Slice-17.png" },
    { id: 18, title: "Home & Office", image: "/imgi_22_Slice-18.png" },
    { id: 19, title: "Personal Care", image: "/imgi_23_Slice-19.png" },
    { id: 20, title: "Pet Care", image: "/imgi_24_Slice-20.png" },
  ]);

  // ================= CART =================
  const [cart, setCart] = useState([]);

  // Cart open / close
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ================= CART ANIMATION =================
  const [cartAnimation, setCartAnimation] = useState(false);

  // ================= ADD PRODUCT =================
  const addToCart = (product) => {
    // Start animation
    setCartAnimation(true);

    // Stop animation after 700ms
    setTimeout(() => {
      setCartAnimation(false);
    }, 700);

    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // ================= INCREASE =================
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE =================
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= REMOVE =================
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // ================= TOTAL ITEMS =================
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= TOTAL PRICE =================
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* HEADER */}
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        cartAnimation={cartAnimation}
      />

      {/* IMAGE SECTION */}
      <Imgsection />

      {/* CATEGORY CARDS */}
      <Card cards={cards} />

      {/* PRODUCTS */}
      <SliderSection onAdd={addToCart} />
      <SliderSection onAdd={addToCart} />
      <SliderSection onAdd={addToCart} />

      {/* FOOTER */}
      <Footer />

      {/* CART */}
      <Cart
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        isCartOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
}