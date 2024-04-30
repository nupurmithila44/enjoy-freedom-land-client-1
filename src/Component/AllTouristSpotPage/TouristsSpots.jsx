import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const TouristsSpots = () => {

    const tourism = useLoaderData()
    const [filter, setfilter] = useState(tourism)
    console.log(filter)

    useEffect(() => {
        fetch('https://enjoy-freedom-server.vercel.app/addTours')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setfilter(data)
            })
    }, [])
const handleFilter = (sortItem) => {
    console.log(sortItem)
    let sortData = [...tourism]
    if(sortItem === 'all'){
        sortData.sort((a, b) => b.avgCost - a.avgCost)
    }
    else if(sortItem === 'avgCost'){
        sortData.sort((a, b) => a.avgCost - b.avgCost)
    }
    setfilter(sortData);
}

    return (
        <div >
            <details className="dropdown  text-center ">
                <summary className="m-1 btn text-white bg-green-500  border ">sort By</summary>
                <ul className="p-2 shadow menu text-center dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter("all")} > <a>Ascending</a></li>
                    <li onClick={() => handleFilter("avgCost")} > <a>Descending</a></li>
                </ul>
            </details>
            <div className="container w-[300px] md:w-[600px] lg:px-20  mx-auto py-8  mt-16">
                <p className="text-[#c7923e] text-center">Choose your Package</p>
                <h1 className="text-4xl font-bold text-center">Select your Best Package for your Tourist Spot</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8">
                {
                    filter.map(tour => <div key={tour._id} className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
                        <figure><img className=" px-6 pt-2 h-[300px] rounded-2xl" src={tour.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h3 className="rounded-3xl border-2 text-center mx-20 py-1 flex justify-center items-center gap-3 "> <IoMdTime className=""></IoMdTime> {tour.travelTime}</h3>
                            <h2 className="card-title text-2xl font-semibold">Spot Name: {tour.tourName}</h2>
                            <h6 className="text-xl font-medium">Seasonality : {tour.seasonality}</h6>
                            <div className="flex justify-between">
                                <p className="text-sm opacity-70"> {tour.avgCost}/Average Cost</p>
                                <p className="text-sm opacity-70"> {tour.totalVisitors} totalVisitPerYear</p>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/viewDetails/${tour._id}`}>
                                    <button className="btn w-full mx-3 bg-[#c7923e]">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* s 1 */}




        </div>
    );
};

export default TouristsSpots;