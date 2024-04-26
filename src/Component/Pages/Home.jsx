import TouristSpots from "./TouristSpots";

const Home = () => {
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
            <div className="container w-[300px] md:w-[600px] p-20 border-2 mx-auto">
             <p className="text-[#c7923e] text-center">Choose your Package</p>
             <h1 className="text-4xl font-bold text-center">Select your Best Package for your Travel</h1>
            </div>
            <div>
                <TouristSpots></TouristSpots>
            </div>

            {/* section 3 */}
            <div className="container w-[300px] md:w-[600px] p-20 border-2 mx-auto">
             <p className="text-[#c7923e] text-center">Popular Destinations</p>
             <h1 className="text-4xl font-bold text-center">Select Our Best Popular Destinations</h1>
            </div>

        </div>
    );
};

export default Home;