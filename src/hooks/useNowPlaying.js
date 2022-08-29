import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useNowPlaying = (page) => {
	return useQuery(
		["now-playing", { page }],
		() => movieDB_API.getNowPlaying(page),
		{ keepPreviousData: true }
	);
};

export default useNowPlaying;
