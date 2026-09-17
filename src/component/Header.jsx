import React from "react";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Header({
  cartCount = 0,
  onCartClick,
  cartAnimation = false,
}) {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40">

      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden lg:flex items-center h-[86px]">

        {/* LOGO */}
        <div className="w-[180px] flex-shrink-0 flex justify-center items-center border-r border-gray-200 h-full">
          <h1 className="text-[38px] font-bold tracking-tight text-[#f8cb46]">
            blink
            <span className="text-[#0c831f]">it</span>
          </h1>
        </div>

        {/* DELIVERY ADDRESS */}
        <div className="w-[320px] flex-shrink-0 px-8 border-r border-gray-200 h-full flex flex-col justify-center">
          <h2 className="font-bold text-[17px] text-gray-900">
            Delivery in 8 minutes
          </h2>

          <button className="flex items-center mt-1 text-left">
            <p className="text-[13px] text-gray-600 truncate max-w-[245px]">
              32, Gopalpura Bypass Rd, Muktanand Nagar...
            </p>

            <IoChevronDown className="ml-1 text-lg text-gray-700 flex-shrink-0" />
          </button>
        </div>

        {/* SEARCH + LOGIN + CART */}
        <div className="flex flex-1 items-center px-6 xl:px-8 gap-5">

          {/* SEARCH */}
          <div className="flex items-center flex-1 bg-[#f7f7f7] border border-gray-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:bg-white transition-all duration-200">

            <IoSearchOutline className="text-2xl text-gray-500 flex-shrink-0" />

            <input
              type="text"
              placeholder='Search "milk"'
              className="w-full ml-3 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
            />
          </div>

          {/* LOGIN */}
          <button className="text-[17px] font-medium text-gray-700 hover:text-black transition whitespace-nowrap">
            Login
          </button>

          {/* CART */}
          <button
            onClick={onCartClick}
            className={`relative flex items-center justify-center gap-2 bg-[#0c831f] text-white px-5 py-3 rounded-xl font-semibold whitespace-nowrap hover:bg-[#096b19] hover:shadow-lg active:scale-95 transition-all duration-200 ${
              cartAnimation ? "animate-bounce" : ""
            }`}
          >
            <FaShoppingCart
              className={`text-lg transition-transform duration-300 ${
                cartAnimation ? "scale-125" : ""
              }`}
            />

            <span>My Cart</span>

            {/* CART COUNT */}
            {cartCount > 0 && (
              <span
                className={`absolute -top-2 -right-2 min-w-6 h-6 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold border-2 border-white shadow-md ${
                  cartAnimation ? "animate-ping" : ""
                }`}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden p-4">

        {/* TOP ROW */}
        <div className="flex items-center justify-between mb-3">

          {/* DELIVERY */}
          <button className="flex items-center min-w-0">

            <div className="text-left min-w-0">
              <p className="text-[10px] text-gray-500">
                Delivery to
              </p>

              <p className="text-[12px] font-semibold text-gray-800 truncate max-w-[210px]">
                32, Gopalpura Bypass Rd...
              </p>
            </div>

            <IoChevronDown className="ml-1 text-gray-700 flex-shrink-0" />
          </button>

          {/* MOBILE ICONS */}
          <div className="flex items-center gap-5">

            {/* CART */}
            <button
              onClick={onCartClick}
              className={`relative p-1 ${
                cartAnimation ? "animate-bounce" : ""
              }`}
            >
              <FaShoppingCart
                className={`text-xl text-gray-800 transition-transform duration-300 ${
                  cartAnimation ? "scale-125" : ""
                }`}
              />

              {cartCount > 0 && (
                <span
                  className={`absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold border-2 border-white ${
                    cartAnimation ? "animate-ping" : ""
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* PROFILE */}
            <button>
              <CgProfile className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="flex items-center bg-[#f7f7f7] border border-gray-200 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:bg-white transition-all duration-200">

          <IoSearchOutline className="text-xl text-gray-500 flex-shrink-0" />

          <input
            type="text"
            placeholder='Search "milk"'
            className="w-full ml-3 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
          />
        </div>
      </div>
    </header>
  );
}