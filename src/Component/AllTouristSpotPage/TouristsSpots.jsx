import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const TouristsSpots = ({tour}) => {
    const {_id,tourName,avgCost,totalVisitors,seasonality, travelTime, photo }=tour;

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* s 1 */}
        <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
            <figure><img className=" px-6 pt-2 rounded-2xl" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className="rounded-3xl border-2 text-center mx-20 py-1 flex justify-center items-center gap-3 "> <IoMdTime className=""></IoMdTime> {travelTime}</h3>
                <h2 className="card-title text-2xl font-semibold">Spot Name: {tourName}</h2>
                <h6 className="text-xl font-medium">Seasonality : {seasonality}</h6>
                <div className="flex justify-between">
                    <p className="text-sm opacity-70"> {avgCost}/Average Cost</p>
                    <p className="text-sm opacity-70"> {totalVisitors} totalVisitPerYear</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/viewDetails/${_id}`}>
                    <button className="btn w-full mx-3 bg-[#c7923e]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

 
      
    </div>
    );
};

export default TouristsSpots;