import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
	const tours = useLoaderData()
	const { id } = useParams()
	const tour = tours.find(tour => tour._id == id)
	const { _id, tourName, avgCost, totalVisitors, seasonality, travelTime, photo } = tour;


	return (
		<div className="my-10">
			<div className="flex lg:flex-row flex-col justify-between items-center gap-5 border-2 lg:w-[1140px] md:w-[600px] w-[350px] mx-auto">
				<div className=" w-[500px] p-3">
					<img src={photo} alt="" />
				</div>
				<div className=" w-full p-3 space-y-3">
					<div className="flex lg:flex-row flex-col justify-between lg:items-center gap-2">
						<h2><span className="text-base font-semibold">tourists spot name:</span> {tourName}</h2>
						<h2><span className="text-base font-semibold"> seasonality:</span> {seasonality}</h2>
					</div>
					<div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
						<h2><span className="text-base font-semibold">average_cost:</span> ${avgCost}</h2>
						<h2><span className="text-base font-semibold">totaVisitorsPerYear:</span> {totalVisitors}</h2>
						<h2><span className="text-base font-semibold">travel_time:</span> {travelTime}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewDetails;