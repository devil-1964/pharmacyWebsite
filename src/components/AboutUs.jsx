import images from "./assets"

const AboutUs = () => {
    return (
        <div className="max-sm:px-4 px-28 min-h-[500px] w-full">
            <div className="text-5xl max-sm:text-center font-semibold pb-4">About Us</div>
            <div className="px-6 flex text-lg gap-6 justify-between max-sm:flex-wrap-reverse">
                <div className="text-left tracking-wide max-sm:max-w-full max-sm:text-justify max-sm:tracking-tight max-w-2/5 font-semibold">Aqunova Pharma Pvt. Ltd. is a budding pharmaceutical company from India that is currently operational in providing Healthcare Solutions in the field of Infertility and Gynecology striving towards reinstating joy and bringing contentment to the Modern Woman’s Life</div>
                <div className="max-sm:w-full max-sm:h-[200px] w-3/5 h-[340px] overflow-hidden rounded-lg shadow-md">
                    <img src={images.aboutus} className="object-cover w-full h-full  " />
                </div>
            </div>
        </div>
    )
}

export default AboutUs