import React from "react";

const Product = ({ title, img, desc }) => {
  return (
    <div className="
      h-[450px]
      flex flex-col
      bg-white rounded-lg
      border border-zinc-500
      shadow-lg
      overflow-hidden
      transition-transform duration-300
      hover:shadow-xl
      my-2
    ">
      <div className="h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="
            w-full h-full
            object-cover
            transition-transform duration-500
            hover:scale-110
          "
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="
          text-xl font-bold
          text-gray-800
          mb-2
          line-clamp-2
        ">
          {title}
        </h3>

        <p className="
          text-base
          text-gray-600
          flex-grow
          line-clamp-4
        ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Product;