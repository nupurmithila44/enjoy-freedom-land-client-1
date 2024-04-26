import { Link } from "react-router-dom";



const AddTourists = () => {
const handlesubmit = e =>{
    e.preventDefault()
}

    return (
        <div className="mt-6 mb-6 ">
        <Link to='/'><h1 className="text-2xl font-bold px-40">Back to Home</h1></Link>
          <div className="p-24 bg-gray-200 w-[700px] lg:w-[1200px] mx-auto mt-4" >
        <h1 className="text-2xl font-bold text-center">Add Tourists Spot </h1>
        <p className=" text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos soluta veritatis fuga, ratione laudantium recusandae distinctio incidunt optio vero laboriosam, tenetur voluptate praesentium vel doloremque eos placeat voluptas fugiat.</p>
        <form onSubmit={handlesubmit}>
          <div className="md:flex border">
            <div className="md:w-1/2">
              <label className="label">
                <span className="text-2xl">Name</span>
              </label>
              <input type="text" name="name" placeholder="enter coffee name" className="input input-bordered w-full" id="" />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <label className="label">
                <span className="text-2xl">chef</span>
              </label>
              <input type="text" name="chef" placeholder="enter coffee chef" className="input input-bordered w-full" id="" />
            </div>
          </div>
           
            <div className="md:flex border">
            <div className="md:w-1/2">
              <label className="label">
                <span className="text-2xl">Supplier</span>
              </label>
              <input type="text" name="supplier" placeholder="enter coffee supplr" className="input input-bordered w-full" id="" />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <label className="label">
                <span className="text-2xl">tasty</span>
              </label>
              <input type="text" name="tasty" placeholder="enter coffee tasty" className="input input-bordered w-full" id="" />
            </div>
          </div>
         
            <div className="md:flex border">
            <div className="md:w-1/2">
              <label className="label">
                <span className="text-2xl">category</span>
              </label>
              <input type="text" name="category" placeholder="enter coffee category" className="input input-bordered w-full" id="" />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <label className="label">
                <span className="text-2xl">details</span>
              </label>
              <input type="text" name="details" placeholder="enter coffee details" className="input input-bordered w-full" id="" />
            </div>
          </div>
          <div className=" mb-7">
            <div className="md:w-full">
              <label className="label">
                <span className="text-2xl">photo</span>
              </label>
              
              <input type="photoURL" name="photo" placeholder="enter coffee photoUrl" className="input input-bordered w-full" id="" />
            </div>
          </div>
          <div>
          <input type="submit" value="add coffee" className="btn btn-block"/>
          </div>
        </form>
      </div>
      </div>
    );
};

export default AddTourists;