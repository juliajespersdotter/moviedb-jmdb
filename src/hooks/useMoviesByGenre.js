import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useMoviesByGenre = (id) => {
	return useQuery(["moviesbygenre", id], () =>
		movieDB_API.getMoviesByGenre(id)
	);
};

export default useMoviesByGenre;
