import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useNowPlaying = () => {
	return useQuery("now-playing", movieDB_API.getNowPlaying);
};

export default useNowPlaying;
