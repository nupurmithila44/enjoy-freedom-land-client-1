
import Countries from "../AllTouristSpotPage/Countries";
import TouristsSpots from "../AllTouristSpotPage/TouristsSpots";
import { FaCar, FaArrowAltCircleRight } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const tourisam = useLoaderData()
    console.log(tourisam)
    return (
        <div>
            {/* section 1 */}
            <div className="carousel w-full rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                            <h1 className="text-center text-4xl font-bold text-blue-500">Experience the beauty of Rwanda with us</h1>
                            <p className="text-center text-base ">Discover the Land of a Thousand Hills</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                            <h1 className="text-center text-4xl font-bold text-blue-500">Experience the beauty of Rwanda with us</h1>
                            <p className="text-center text-base ">Discover the Land of a Thousand Hills</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                            <h1 className="text-center text-4xl font-bold text-blue-500">Experience the beauty of Rwanda with us</h1>
                            <p className="text-center text-base ">Discover the Land of a Thousand Hills</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                            <h1 className="text-center text-4xl font-bold text-blue-500">Experience the beauty of Rwanda with us</h1>
                            <p className="text-center text-base ">Discover the Land of a Thousand Hills</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto py-8  mt-16">
                <p className="text-[#c7923e] text-center">Choose your Package</p>
                <h1 className="text-4xl font-bold text-center">Select your Best Package for your Tourist Spot</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    tourisam.map(tour=> <TouristsSpots key={tour._id} tour={tour}></TouristsSpots>)
                }
            </div>

            {/* section 3 */}
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto  py-8  mt-16">
                <p className="text-[#c7923e] text-center">Popular Destinations</p>
                <h1 className=" text-xl lg:text-4xl font-bold text-center">Select Our Best Popular Countries</h1>
            </div>
            <div>
                <Countries></Countries>
            </div>

            {/* section 4 */}
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto  py-8  mt-16">
                <p className="text-[#c7923e] text-center">Why us?</p>
                <h1 className=" text-xl lg:text-4xl font-bold text-center">Why Travel with rica wizzy Safari</h1>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className=" border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center "> <FaCar></FaCar> </p>
                    <p>Lorem ipsum dolor, sit amet consectetur  </p>
                </div>
                <div className="border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center "> <FaPersonBreastfeeding></FaPersonBreastfeeding> </p>
                    <p>Lorem ipsum dolor, sit amet consectetur  </p>
                </div>
                <div className="border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center "> <FaArrowAltCircleRight></FaArrowAltCircleRight> </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className=" border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center"><GrLike></GrLike> </p>
                    <p>Lorem ipsum dolor, sit amet consectetur  </p>
                </div>
            </div>

            {/* section 5 */}
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto  py-8 mt-16">
                <p className="text-[#c7923e] text-center">Our Traveller Say</p>
                <h1 className=" text-xl lg:text-4xl font-bold text-center">Why Travel with rica wizzy Safari</h1>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;