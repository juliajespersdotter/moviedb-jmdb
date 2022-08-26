import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useMovieRecs = (id) => {
	return useQuery(["movierecs", id], () => movieDB_API.getRecommended(id));
};

export default useMovieRecs;
