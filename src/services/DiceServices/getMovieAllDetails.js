import axios from 'axios';
import {locale} from '../../assets/util/phoneLanguage';
export const getMovieDetail = id => {
  return axios({
    method: 'get',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {
      api_key: 'ae3bb45bf136ab578d22629b6eec6017',
      language: locale,
    },
  });
};
