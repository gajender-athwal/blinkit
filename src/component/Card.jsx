import React from "react";

export default function Card({ cards }) {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {cards.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-xl bg-gray-100 p-2 hover:scale-105 transition duration-300"
            />

            <h3 className="mt-2 text-sm font-medium">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}