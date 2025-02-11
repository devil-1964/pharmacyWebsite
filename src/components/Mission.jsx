import images from "./assets"

const Mission = () => {
    return (
        <div className="max-sm:px-4 px-28 min-h-[500px] pt-6 w-full  flex items-center">
            <div className="flex flex-row p-6 text-lg gap-6 justify-between max-sm:flex-wrap-reverse">
                <div className="w-full max-w-2/5 max-sm:max-w-full max-sm:text-justify max-sm:tracking-tight">
                    <div className="text-4xl font-semibold pb-4">Mission</div>
                    <div className="text-left tracking-wide   font-semibold">Our mission to enrich the lives of our patients and alleviate their ailments with the help of our ingeniously curated affordable formulations.</div>

                </div>
                <div className="max-sm:w-full max-sm:h-[200px] w-3/5 h-[340px] overflow-hidden rounded-lg shadow-md">
                    <img src={images.aboutus} className="object-cover w-full h-full " />
                </div>
            </div>
        </div>
    )
}

export default Mission