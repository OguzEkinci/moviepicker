import axios from 'axios';

export const getTrending = timeRange => {
  return axios({
    method: 'get',
    url: `https://api.themoviedb.org/3/trending/movie/${timeRange}?api_key=ae3bb45bf136ab578d22629b6eec6017`,
  });
};
