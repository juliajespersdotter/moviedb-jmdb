import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useMoviesByGenre = (id, page) => {
	return useQuery(
		["moviesbygenre", { id, page }],
		() => movieDB_API.getMoviesByGenre(id, page),
		{ keepPreviousData: true }
	);
};

export default useMoviesByGenre;
