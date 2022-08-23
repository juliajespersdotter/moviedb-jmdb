import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useMovie = (id) => {
	return useQuery(["movie", id], () => movieDB_API.getMovie(id));
};

export default useMovie;
