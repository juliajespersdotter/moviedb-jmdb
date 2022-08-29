import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const usePopular = (page) => {
	return useQuery(
		["popular", { page }],
		() => movieDB_API.getPopularMovies(page),
		{ keepPreviousData: true }
	);
};

export default usePopular;
