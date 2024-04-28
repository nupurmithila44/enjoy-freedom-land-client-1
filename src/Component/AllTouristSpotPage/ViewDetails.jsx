import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
  const tours = useLoaderData()
  const {id}=useParams()
const tour = tours.find(tour => tour._id == id)
const {_id,tourName,avgCost,totalVisitors,seasonality, travelTime,shortDescript,  photo }= tour;


    return (

      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{tourName}</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2024</span>
				<p>{shortDescript}</p>
			</div>
		</a>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section>
    );
};

export default ViewDetails;