import { IoMdTime } from "react-icons/io";

const TouristsSpots = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* s 1 */}
        <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
            <figure><img className=" px-6 pt-2 rounded-2xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className="rounded-3xl border-2 text-center mx-20 py-1 flex justify-center items-center gap-3 "> <IoMdTime className=""></IoMdTime> 3 Day 4 Nights</h3>
                <h2 className="card-title text-2xl font-semibold">Spot Name: Machu Picchu</h2>
                <h6 className="text-xl font-medium">Seasonality : summer</h6>
                <div className="flex justify-between">
                    <p className="text-sm opacity-70"> 15000/Average Cost</p>
                    <p className="text-sm opacity-70"> 1500000 totalVisitPerYear</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn w-full mx-3 bg-[#c7923e]">View Details</button>
                </div>
            </div>
        </div>
        {/* s 1 */}
        <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
            <figure><img className=" px-6 pt-2 rounded-2xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className="rounded-3xl border-2 text-center mx-20 py-1 flex justify-center items-center gap-3 "> <IoMdTime className=""></IoMdTime> 3 Day 4 Nights</h3>
                <h2 className="card-title text-2xl font-semibold">Spot Name: Machu Picchu</h2>
                <h6 className="text-xl font-medium">Seasonality : summer</h6>
                <div className="flex justify-between">
                    <p className="text-sm opacity-70"> 15000/Average Cost</p>
                    <p className="text-sm opacity-70"> 1500000 totalVisitPerYear</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn w-full mx-3 bg-[#c7923e]">View Details</button>
                </div>
            </div>
        </div>
        {/* s 1 */}
        <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
            <figure><img className=" px-6 pt-2 rounded-2xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className="rounded-3xl border-2 text-center mx-20 py-1 flex justify-center items-center gap-3 "> <IoMdTime className=""></IoMdTime> 3 Day 4 Nights</h3>
                <h2 className="card-title text-2xl font-semibold">Spot Name: Machu Picchu</h2>
                <h6 className="text-xl font-medium">Seasonality : summer</h6>
                <div className="flex justify-between">
                    <p className="text-sm opacity-70"> 15000/Average Cost</p>
                    <p className="text-sm opacity-70"> 1500000 totalVisitPerYear</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn w-full mx-3 bg-[#c7923e]">View Details</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TouristsSpots;