import { FaMapMarkerAlt } from "react-icons/fa";

const Countries = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
                <div className="rounded-box">
                    <img className=" px-6 pt-2 rounded-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </div>
                <div className="card-body">
                    <h3 className="rounded-3xl  py-1 flex   gap-1 "> <FaMapMarkerAlt></FaMapMarkerAlt> Bangladesh</h3>
                    <h1 className="text-2xl font-semibold">Country Name: Bangladesh</h1>
                    <h2 className="card-title text-xl font-semibold"> Machu Picchu</h2>
                    <p className="text-sm">description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, magni.</p>
                    <hr />
                    <h6 className="text-xl font-medium">Seasonality : summer</h6>
                    <div className="flex justify-between">
                        <p className="text-sm opacity-70"> 15000/Average Cost</p>
                        <button className="btn  mx-3 bg-[#c7923e]">View Details</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
                <div className="rounded-box">
                    <img className=" px-6 pt-2 rounded-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </div>
                <div className="card-body">
                    <h3 className="rounded-3xl  py-1 flex   gap-1 "> <FaMapMarkerAlt></FaMapMarkerAlt> Bangladesh</h3>
                    <h1 className="text-2xl font-semibold">Country Name: Bangladesh</h1>
                    <h2 className="card-title text-xl font-semibold"> Machu Picchu</h2>
                    <p className="text-sm">description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, magni.</p>
                    <hr />
                    <h6 className="text-xl font-medium">Seasonality : summer</h6>
                    <div className="flex justify-between">
                        <p className="text-sm opacity-70"> 15000/Average Cost</p>
                        <button className="btn  mx-3 bg-[#c7923e]">View Details</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 p-2 shadow-xl">
                <div className="rounded-box">
                    <img className=" px-6 pt-2 rounded-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </div>
                <div className="card-body">
                    <h3 className="rounded-3xl  py-1 flex   gap-1 "> <FaMapMarkerAlt></FaMapMarkerAlt> Bangladesh</h3>
                    <h1 className="text-2xl font-semibold">Country Name: Bangladesh</h1>
                    <h2 className="card-title text-xl font-semibold"> Machu Picchu</h2>
                    <p className="text-sm">description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, magni.</p>
                    <hr />
                    <h6 className="text-xl font-medium">Seasonality : summer</h6>
                    <div className="flex justify-between">
                        <p className="text-sm opacity-70"> 15000/Average Cost</p>
                        <button className="btn  mx-3 bg-[#c7923e]">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countries;