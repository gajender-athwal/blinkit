import React from "react";

export default function ProductCard({
  id,
  image,
  title,
  price,
  onAdd,
}) {
  return (
    <div className="shadow p-4 rounded-lg bg-white w-full">

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain"
      />

      <div className="flex flex-col gap-2 items-start text-[13px]">

        <button className="text-[9px] border px-1 rounded">
          8 min
        </button>

        <h3 className="text-[13px] font-medium">
          {title}
        </h3>

        <p>65 pcs</p>

        <div className="w-full flex justify-between items-center">

          <span className="font-semibold">
            ₹{price}
          </span>

          <button
            onClick={() =>
              onAdd({
                id,
                image,
                title,
                price,
              })
            }
            className="px-3 rounded-sm text-white py-1 bg-green-600 hover:bg-green-700 transition"
          >
            Add
          </button>

        </div>
      </div>
    </div>
  );
}