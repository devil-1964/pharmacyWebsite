import images from "./assets"
const Navbar = () => {
  return (
        <div className="sticky top-0 shadow-lg z-50  bg-white w-full font-bold max-sm:px-10 px-28 py-3 flex justify-between items-center">
            <div>
                <div className="font-liter text-3xl text-primary-100">Logo</div>
            </div>
            <div className="flex space-x-8 max-sm:hidden">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Products</div>
                    <div>Career</div>
                    <div>Contact Us</div>
                    <div className="flex gap-2 items-center "><img src={images.globe} height={20} width={20}/>India</div>
            </div>
        </div>
  )
}

export default Navbar