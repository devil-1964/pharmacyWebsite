import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Product from "./Product";
import items from "./items"
const Products = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...items,...items];

  return (
    <div id="products" className="max-sm:px-4 px-28 min-h-[600px] w-full flex flex-col justify-center relative bg-gradient-to-bl to-secondary from-primary-100">
      <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-5xl max-sm:text-center text-white text-left font-semibold py-4">
        Our Products
      </motion.h2>
      
      <motion.div 
        ref={carousel}
        className="overflow-hidden px-6 pt-9"
      >
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          animate={{
            x: [-width, 0],
            transition: {
              repeat: Infinity,
              duration: 100,
              ease: "linear"
            }
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 max-sm:w-full w-1/3 p-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Product 
                img={item.img} 
                title={item.title} 
                desc={item.desc} 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;