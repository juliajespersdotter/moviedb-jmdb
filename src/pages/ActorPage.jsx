import React from "react";
import { useParams } from "react-router-dom";
import useActor from "../hooks/useActor";
import ActorDetails from "../components/ActorDetails";

const ActorPage = () => {
	const { id } = useParams();
	const { data: actor } = useActor(id);

	return <>{actor && <ActorDetails actor={actor} />}</>;
};

export default ActorPage;
