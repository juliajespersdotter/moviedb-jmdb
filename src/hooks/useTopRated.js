import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useTopRated = () => {
	return useQuery("top-rated", movieDB_API.getTopRated);
};

export default useTopRated;
