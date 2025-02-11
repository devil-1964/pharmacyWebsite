const Product = ({ title, img, desc }) => {
    return (
      <div className="flex-shrink-0 snap-center border-2 shadow-md bg-white border-zinc-500 border-solid rounded-lg overflow-hidden">
        <div>
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-56" 
          />
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-lg text-gray-600 mt-2">{desc}</div>
        </div>
      </div>
    );
  };
  
  export default Product;
  