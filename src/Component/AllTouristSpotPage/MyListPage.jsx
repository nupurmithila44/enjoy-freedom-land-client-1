import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthPovider/AuthProvider";

const MyListPage = () => {
    const userPages = useLoaderData()
  
    const [users, setUsers] = useState(userPages)
    const {user}=useContext(AuthContext)
    const email = user.email
    useEffect(()=>{
        fetch('https://enjoy-freedom-server.vercel.app/addTours')
        .then(res => res.json())
        .then(data =>{
            setUsers(data.filter((singleData)=>singleData.email===email))
        })
    },[])

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
               

            fetch(`https://enjoy-freedom-server.vercel.app/addTours/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
             console.log(data)
             if(data.deletedCount>0){
               Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                const remaining = users.filter(user=> user._id !== _id)
                setUsers(remaining)
             }
            })
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto mt-16 border-2 rounded-lg border-[#c7923e]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold bg-[#c7923e]">
                            <th></th>
                            <th>Tour Name</th>
                            <th>Email</th>
                            <th>Avg Cost</th>
                            <th>Seasonality</th>
                            <th>Total Visitors</th>
                            <th>Travel Time</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th></th>
                                <th>{user.tourName}</th>
                                <th>{user.email}</th>
                                <th>{user.avgCost}</th>
                                <th>{user.seasonality}</th>
                                <th>{user.totalVisitors}</th>
                                <th>{user.travelTime}</th>
                                    <Link to={`/updatePage/${user._id}`}>
                                    <th><button  className="btn bg-[#77aa9d] text-white ">update</button></th>
                                    </Link>
                                <th><button onClick={() => handleDelete(user._id)} className="btn bg-red-700">delete</button></th>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListPage;