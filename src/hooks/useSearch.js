import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useSearch = (query, page) => {
	return useQuery(
		["search", { query, page }],
		() => movieDB_API.getSearchResult(query, page),
		{ enabled: !!query }
	);
};

export default useSearch;
