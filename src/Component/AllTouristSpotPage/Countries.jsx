import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";


const Countries = () => {
    const lodar = useLoaderData()
    const { countri } = useParams()
    const countriTouri = lodar.filter(coutri => coutri.countryName === countri)
    console.log(countriTouri)
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                    countriTouri.map(countri => <div key={countri._id} className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
                        <div className="rounded-box">
                            <img className=" px-6 pt-2 rounded-lgg" src={countri.photo} alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <h3 className="rounded-3xl  py-1 flex   gap-1 "> <FaMapMarkerAlt></FaMapMarkerAlt> {countri.tourName}</h3>
                            <h1 className="text-2xl font-semibold">Country Name: {countri.countryName}</h1>
                            <h2 className="card-title text-xl font-semibold">{countri.location}</h2>
                            <p className="text-sm">{countri.shortDescript}</p>
                            <hr />
                            <h6 className="text-xl font-medium">{countri.seasonality}</h6>
                            <div className="flex justify-between">
                                <p className="text-sm opacity-70"> {countri.avgCost}/Average Cost</p>
                                <div className="flex justify-between">
                                    <Link to={`/viewDetails/${countri._id}`} ><button className="btn  mx-3 bg-[#c7923e]">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Countries;