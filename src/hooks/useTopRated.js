import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useTopRated = (page) => {
	return useQuery(
		["top-rated", { page }],
		() => movieDB_API.getTopRated(page),
		{ keepPreviousData: true }
	);
};

export default useTopRated;
