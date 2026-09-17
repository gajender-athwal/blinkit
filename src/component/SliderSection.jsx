import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

import ProductCard from "./ProductCard";

export default function SliderSection({ onAdd }) {
  const [Sliders] = useState([
    {
      id: 21,
      title: "Tea, Coffee & Milk Drinks",
      price: 149,
      image:
        "/imgi_30_asset_Sweets_&_chocolates_1697025717829.jpg",
    },
    {
      id: 22,
      title: "Bath & Body",
      price: 199,
      image:
        "/imgi_31_asset_V7_312x360_(2)_1774455548692.jpg",
    },
    {
      id: 23,
      title: "Skin & Face Care",
      price: 299,
      image:
        "/imgi_32_asset_L0_v1_0_1746557294148.jpg",
    },
    {
      id: 24,
      title: "Beauty & Cosmetics",
      price: 399,
      image:
        "/imgi_35_asset_Beauty_&_Cosmetics_1714732446632.jpg",
    },
    {
      id: 25,
      title: "Baby Care",
      price: 249,
      image:
        "/imgi_36_asset_V7_312x360_1778246752991.jpg",
    },
    {
      id: 26,
      title: "Sexual Wellness",
      price: 349,
      image:
        "/imgi_37_asset_Sexual_wellness_1697028588156.jpg",
    },
  ]);

  return (
    <section className="bg-gray-50 py-8 sm:py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-sm font-medium text-green-600 mb-1">
              Fresh & Quality Products
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Shop by Category
            </h2>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
    hidden sm:flex
    items-center
    gap-2
    group
    px-5
    py-2.5
    rounded-xl
    bg-green-50
    text-green-700
    border
    border-green-100
    font-semibold
    text-sm
    shadow-sm
    hover:bg-green-600
    hover:text-white
    hover:border-green-600
    hover:shadow-lg
    hover:-translate-y-1
    active:scale-95
    transition-all
    duration-300
  "
          >
            View All

            <span
              className="
      flex
      items-center
      justify-center
      w-6
      h-6
      rounded-full
      bg-green-600
      text-white
      group-hover:bg-white
      group-hover:text-green-600
      transition-all
      duration-300
      group-hover:translate-x-1
    "
            >
              →
            </span>
          </button>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: true,
          }}
          slidesPerView={1.5}
          spaceBetween={12}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 14,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 18,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="[!pb-3]">

          {Sliders.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="group">

                <div
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border border-gray-100
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >

                  <ProductCard
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onAdd={onAdd}
                  />

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Mobile View All */}
        <div className="flex sm:hidden justify-center mt-5">

          <button
            className="
              px-6
              py-2.5
              rounded-full
              bg-green-600
              text-white
              font-semibold
              shadow-md
              hover:bg-green-700
              transition
            "
          >
            View All →
          </button>

        </div>

      </div>

    </section>
  );
}