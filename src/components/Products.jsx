import React from "react";
import items from "./items";
import Product from "./Product";

const Products = () => {
  return (
    <div className="max-sm:px-4 px-28 min-h-[600px] w-full flex flex-col justify-center relative bg-gradient-to-bl to-secondary from-primary-100">
      <div className="text-5xl max-sm:text-center  text-white text-left font-semibold py-4">Our Products</div>
      <div className="px-6 flex text-lg gap-6 pt-9 flex-row overflow-x-auto snap-x snap-mandatory">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex-shrink-0 max-sm:w-full w-1/3 p-3 snap-center">
              <Product img={item.img} title={item.title} desc={item.desc} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;
