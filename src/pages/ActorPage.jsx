import React from "react";
import { useParams } from "react-router-dom";
import useActor from "../hooks/useActor";
import ActorDetails from "../components/ActorDetails";
import LoadingSpinner from "../components/LoadingSpinner";

const ActorPage = () => {
	const { id } = useParams();
	const { data: actor, isLoading } = useActor(id);
	console.log(actor);

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{actor && <ActorDetails actor={actor} />}
		</>
	);
};

export default ActorPage;
