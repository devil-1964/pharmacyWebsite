import images from "./assets"

const Home = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[550px] bg-cover bg-center bg-no-repeat flex items-center  px-16 max-sm:justify-center max-sm:relative mb-20 max-sm:mb-48" style={{ backgroundImage: `url(${images.pharma2})` }} >
        <div className="bg-white gap-2 w-fit p-14 flex flex-col rounded-xl max-sm:p-6 max-sm:m-3 max-sm:absolute -bottom-40 shadow-md">
            <div className="text-5xl max-sm:text-2xl font-black">Fourth Quator & Full<br/> Year 2024 Results</div>
            <div className="text-xl max-sm:text-sm  font-semibold">To provide International Standard yet <br/>affordable healthcare solutions to the world!</div>
            <div className="bg-primary-100 rounded-sm py-4 px-6 w-fit max-sm:text-sm max-sm:p-3 text-white font-bold">Discover More</div>
        </div>
    </div>
  )
}

export default Home