import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const updateTravel = useLoaderData()
    const {_id, countryName, tourName,avgCost,totalVisitors,shortDescript, seasonality, travelTime, photo }=updateTravel;

    const handleUpadatePage = event => {
        event.preventDefault()
        const form = event.target
        const countryName = form.countryName.value;
        const tourName = form.tourName.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const shortDescript = form.shortDescript.value;
        const avgCost = form.avgCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const updateTourism = { countryName, tourName, location,photo, shortDescript, avgCost, seasonality, travelTime, totalVisitors}
        console.log(updateTourism)

        // send data to the server
        fetch(`http://localhost:5000/addTours/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateTourism)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'user Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="mt-6 mb-6 ">
        <Link to='/'><button className="bg-[#e8d4b3] p-3 rounded-md ml-24">Back to Home</button></Link>
        <div className="p-24 bg-gray-200 w-[700px] lg:w-[1200px] mx-auto mt-4 border-2" >
            <h1 className="text-2xl font-bold text-center mb-6">Update Page</h1>
            <form onSubmit={handleUpadatePage} >
                <div className="md:flex border">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="text-xl"> Country Name :</span>
                        </label>
                        <input type="text" name="countryName" defaultValue={countryName}  placeholder="enter Country Name" className="input input-bordered w-full" id="" />
                    </div>
                    <div className="md:w-1/2 md:pl-4">
                        <label className="label">
                            <span className="text-xl">Tourists spot name:</span>
                        </label>
                        <input type="text" name="tourName" defaultValue={tourName} placeholder="enterTourists spot name" className="input input-bordered w-full" id="" />
                    </div>
                </div>

                <div className="md:flex border">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="text-xl">Location:</span>
                        </label>
                        <input type="text" name="location" defaultValue={location} placeholder="enter Location" className="input input-bordered w-full" id="" />
                    </div>
                    <div className="md:w-1/2 md:pl-4">
                        <label className="label">
                            <span className="text-xl">Image: </span>
                        </label>
                        <input type="photoURL" name="photo" defaultValue={photo} placeholder="enter photoUrl" className="input input-bordered w-full" id="" />
                    </div>
                </div>

                <div className="md:flex border">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="text-xl">Short description :</span>
                        </label>
                        <input type="text" name="shortDescript" defaultValue={shortDescript} placeholder="enter Short description" className="input input-bordered w-full" id="" />
                    </div>
                    <div className="md:w-1/2 md:pl-4">
                        <label className="label">
                            <span className="text-xl">Average cost :</span>
                        </label>
                        <input type="text" name="avgCost" defaultValue={avgCost} placeholder="enter Average cost" className="input input-bordered w-full" id="" />
                    </div>
                </div>
                <div className="md:flex border mb-12">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="text-xl">Seasonality :</span>
                        </label>
                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder="enter Seasonality" className="input input-bordered w-full" id="" />
                    </div>
                    <div className="md:w-1/2 md:pl-4">
                        <label className="label">
                            <span className="text-xl">travel time:</span>
                        </label>
                        <input type="text" name="travelTime" defaultValue={travelTime} placeholder="enter travel time" className="input input-bordered w-full" id="" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="text-xl">total Visitors PerYear:</span>
                        </label>
                        <input type="text" name="totalVisitors" defaultValue={totalVisitors} placeholder="enter total Visitors PerYear" className="input input-bordered w-full" id="" />
                    </div>
                </div>
                <div>
                    <input type="submit" value="Update page" className="btn btn-block bg-[#e8d4b3] text-2xl font-semibold" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdatePage;