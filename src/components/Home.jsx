import { motion } from 'motion/react';
import images from './assets';

const Home = () => {
  return (
    <div 
      className="relative w-full h-[300px] md:h-[350px] lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center px-16 max-sm:justify-center max-sm:relative max-sm:mb-32" 
      style={{ backgroundImage: `url(${images.pharma2})` }}
    >
      <motion.div
        id="home"
        initial={{ opacity:0,x: -100 }} 
        whileInView={{ opacity:1,x: 0 }}
        viewport={{ once: true }}
        transition={{
            type: 'spring',
            stiffness: 50,
            damping: 11,
            mass: 1,
            duration: 1,
            delay:0.5
        }}
        className="bg-white gap-2 w-fit p-14 flex flex-col rounded-xl max-sm:p-6 max-sm:m-3 max-sm:absolute -bottom-40 shadow-md"
      >
        <div className="text-5xl max-sm:text-2xl font-black">
        Advancing Healthcare<br /> Through Innovation
        </div>
        <div className="text-xl max-sm:text-sm font-semibold">
        Developing breakthrough treatments <br />for a healthier tomorrow
        </div>
        <div className="bg-primary-100 rounded-sm py-4 px-6 w-fit max-sm:text-sm max-sm:p-3 text-white font-bold">
          Discover More
        </div>
      </motion.div>
    </div>
  );
};

export default Home;