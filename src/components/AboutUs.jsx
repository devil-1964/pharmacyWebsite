import { motion } from 'framer-motion';

const AboutUs = ({ title, text, img, color }) => {
    const xAxis = color ? -100 : 100;
    return (
        <div id="about-us" className={`${color ? "bg-gradient-to-bl to-secondary from-primary-100 text-white" : ""} max-sm:px-4 flex flex-col justify-center py-2 px-28 min-h-[500px] max-sm:min-h-fit max-sm:py-12 w-full overflow-x-hidden`}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-5xl max-sm:text-3xl max-sm:text-center font-semibold pb-4"
            >
                {title}
            </motion.div>
            <div className={`${color ? "flex-row-reverse" : ""} px-6 max-sm:px-2 flex text-lg gap-6 justify-between max-sm:flex-wrap-reverse relative`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        type: 'bounce',
                        stiffness: 50,
                        damping: 11,
                        mass: 1,
                        duration: 2,
                        delay: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="text-justify tracking-wide max-sm:w-full md:max-w-2/5 max-sm:text-base max-sm:tracking-tight font-semibold"
                >
                    {text}
                </motion.div>
                <motion.div
                    initial={{ x: xAxis }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        damping: 11,
                        mass: 1,
                        duration: 1,
                    }}
                    className="max-sm:w-full max-sm:h-[250px] md:min-w-[60%] h-[340px] overflow-hidden rounded-lg shadow-md"
                >
                    <img src={img} alt={title} className="object-cover w-full h-full" />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;