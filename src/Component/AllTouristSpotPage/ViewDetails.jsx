import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
  const tours = useLoaderData()
  const {id}=useParams()
const tour = tours.find(tour => tour._id == id)
const {_id,tourName,avgCost,totalVisitors,seasonality, travelTime, photo }= tour;


    return (

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News! {tour.length}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;