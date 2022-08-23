import { useQuery } from "react-query";
import movieDB_API from "../services/movieDB_API";

const useActor = (id) => {
	return useQuery(["actor", id], () => movieDB_API.getActor(id));
};

export default useActor;
