import { useQuery } from 'react-query'
import movieDB_API from '../services/movieDB_API'

const useTrending = timewindow => {
	return useQuery(['trending', { timewindow }], () =>
		movieDB_API.getTrending(timewindow)
	)
}

export default useTrending
