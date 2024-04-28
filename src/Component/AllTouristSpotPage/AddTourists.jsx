import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const AddTourists = () => {
    const handleAddTourism = event => {
        event.preventDefault()
        const form = event.target
        const countryName = form.countryName.value
        const tourName = form.tourName.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const shortDescript = form.shortDescript.value;
        const avgCost = form.avgCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const userName = form.userName.value;
        const email = form.email.value;
      
        const newTourism = { countryName, tourName, location,photo, shortDescript, avgCost, seasonality, travelTime, totalVisitors, userName, email}
        console.log(newTourism)

        // send data to the server
        fetch('http://localhost:5000/addTours',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newTourism)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'user add successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="mt-6 mb-6 ">
            <Link to='/'><button className="bg-[#e8d4b3] p-3 rounded-md ml-24">Back to Home</button></Link>
            <div className="p-24 bg-gray-200 w-[700px] lg:w-[1200px] mx-auto mt-4" >
                <h1 className="text-2xl font-bold text-center">Add Tourists Spot Page</h1>
                <p className=" text-center px-20 mb-6">Every year a lot of tourists from home and abroad come to visit these sports. There are many tourist spots in Bangladesh. All the tourist spots are very beautiful and wonderful.</p>
                <form onSubmit={handleAddTourism} >
                    <div className="md:flex border">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl"> Country Name :</span>
                            </label>
                            <input type="text" name="countryName" placeholder="enter Country Name" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <label className="label">
                                <span className="text-xl">Tourists spot name:</span>
                            </label>
                            <input type="text" name="tourName" placeholder="enterTourists spot name" className="input input-bordered w-full" id="" />
                        </div>
                    </div>

                    <div className="md:flex border">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl">Location:</span>
                            </label>
                            <input type="text" name="location" placeholder="enter Location" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <label className="label">
                                <span className="text-xl">Image: </span>
                            </label>
                            <input type="photoURL" name="photo" placeholder="enter photoUrl" className="input input-bordered w-full" id="" />
                        </div>
                    </div>

                    <div className="md:flex border">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl">Short description :</span>
                            </label>
                            <input type="text" name="shortDescript" placeholder="enter Short description" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <label className="label">
                                <span className="text-xl">Average cost :</span>
                            </label>
                            <input type="text" name="avgCost" placeholder="enter Average cost" className="input input-bordered w-full" id="" />
                        </div>
                    </div>
                    <div className="md:flex border mb-12">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl">Seasonality :</span>
                            </label>
                            <input type="text" name="seasonality" placeholder="enter Seasonality" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <label className="label">
                                <span className="text-xl">travel time:</span>
                            </label>
                            <input type="text" name="travelTime" placeholder="enter travel time" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl">total Visitors PerYear:</span>
                            </label>
                            <input type="text" name="totalVisitors" placeholder="enter total Visitors PerYear" className="input input-bordered w-full" id="" />
                        </div>
                    </div>
                    <div className="divider font-bold">
                        User Name & email
                    </div>
                    <div className="md:flex border">
                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="text-xl">User Name :</span>
                            </label>
                            <input type="text" name="userName" placeholder="enter coffee category" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="md:w-1/2 md:pl-4 mb-6">
                            <label className="label">
                                <span className="text-xl">User Email:</span>
                            </label>
                            <input type="email" name="email" placeholder="enter user email" className="input input-bordered w-full" id="" />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Add Tourists Spot" className="btn btn-block bg-[#e8d4b3] text-2xl font-semibold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTourists;