import t1 from '../../assets/baner1.avif'
import t2 from '../../assets/baner2.jpg'
import t3 from '../../assets/baner3.jpg'
import ti1 from '../../assets/team1-DAEq5hfv.jpg'
import ti2 from '../../assets/team2-Ba3w3mnB.jpg'
import ti3 from '../../assets/team3-DCSw4Ko_.jpg'
import ti4 from '../../assets/team4-0OXQ7Fh7.png'
import { FaCar, FaArrowAltCircleRight, FaMapMarkerAlt } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countris')
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
    }, [])


    return (
        <div>
            {/* section 1 */}
            <div className="carousel w-full rounded-lg mt-16">
                <div id="slide1" className="carousel-item relative h-[500px] w-full">
                    <img src={t1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                            <h1 className="text-center text-4xl font-bold text-blue-500">Experience <span style={{ color: 'white', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['the beauty of Rwanda with us']}
                                    loop={5}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                            <p className="text-center text-base ">Discover the Land of a Thousand Hills</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative h-[500px] w-full">
                    <img src={t2} className="w-full" />
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
                <div id="slide3" className="carousel-item relative h-[500px] w-full">
                    <img src={t3} className="w-full" />
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
            <Fade direction='left'>
                <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto  py-16  mt-20">
                    <p className="text-[#c7923e] text-center">Popular Destinations</p>
                    <h1 className=" text-xl lg:text-4xl font-bold text-center ">Select Our Best Popular Countries</h1>
                </div>

                <div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                        {
                            country.map(countri => <div key={countri._id} className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
                                <div className="rounded-box">
                                    <img className=" px-6 pt-2 rounded-full" src={countri.photo} alt="Shoes" />
                                </div>
                                <div className="card-body">                      
                                    <h1 className="text-2xl font-semibold">{countri.countryName}</h1>
                                    <p className="text-sm">{countri.shortDescript}</p>

                                    <div className="flex justify-between">                              
                                        <div className="flex justify-between">
                                            <Link to={`/coutries/${countri.countryName}`}><button className="btn  mx-3 bg-[#c7923e]">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </Fade>


            {/* section 4 */}
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto  py-16   mt-16">
                <p className="text-[#c7923e] text-center">Why us?</p>
                <h1 className=" text-xl lg:text-4xl font-bold text-center">Why Travel with rica wizzy Safari</h1>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className=" border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center "> <FaCar></FaCar> </p>
                    <p>One can see the charming sun setting from this sea beach </p>
                </div>
                <div className="border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center "> <FaPersonBreastfeeding></FaPersonBreastfeeding> </p>
                    <p> the charming sun setting from this sea beach  </p>
                </div>
                <div className="border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center "> <FaArrowAltCircleRight></FaArrowAltCircleRight> </p>
                    <p>tourist spot in Bangladesh naming Madhabkundu. </p>
                </div>
                <div className=" border-2 rounded-box bg-[#304f47] text-white p-7">
                    <p className="text-4xl flex justify-center"><GrLike></GrLike> </p>
                    <p>tourist spot in Bangladesh naming Madhabkundu </p>
                </div>
            </div>

            {/* section 5 */}
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto  py-16 mb-16 mt-16">
                <p className="text-[#c7923e] text-center">Our Traveller Say</p>
                <h1 className=" text-xl lg:text-4xl font-bold text-center">Why Travel with rica wizzy Safari</h1>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src={ti1} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src={ti2} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src={ti3} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">flkista migio</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                    <img src={ti4} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">chaw casta</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;