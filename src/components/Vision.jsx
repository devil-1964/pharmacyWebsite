import images from "./assets"

const Vision = () => {
    return (
        <div className="max-sm:px-4 px-28 min-h-[500px] bg-gradient-to-bl to-secondary from-primary-100  flex items-center text-white w-full">
            <div className="flex  p-6 rounded-sm  flex-row-reverse text-lg gap-6 justify-between max-sm:flex-wrap-reverse">
                <div className="w-full max-w-2/5 max-sm:max-w-full max-sm:text-justify max-sm:tracking-tight">
                    <div className="text-4xl font-semibold pb-4">Vision</div>
                    <div className="text-left tracking-wide   font-semibold">Our vision is to strive tirelessly to become one of the most comprehensive and affordable Healthcare Solutions Provider at a Global Scale towards creating a healthier tomorrow.</div>

                </div>
                <div className="max-sm:w-full max-sm:h-[200px] w-3/5 h-[340px] overflow-hidden rounded-lg shadow-md">
                    <img src={images.aboutus} className="object-cover w-full h-full " />
                </div>
            </div>
        </div>
    )
}

export default Vision