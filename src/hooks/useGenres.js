import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useGenres = () => {
	return useQuery("genres", () => movieDB_API.getGenres());
};

export default useGenres;
