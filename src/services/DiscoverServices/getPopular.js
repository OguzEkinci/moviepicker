import axios from 'axios';
import {locale} from '../../assets/util/phoneLanguage';

export const getPopular = () => {
  const randomNumberFilter = Math.floor(Math.random() * 500) + 1;
  return axios({
    method: 'get',
    url: `https://api.themoviedb.org/3/movie/popular`,
    params: {
      api_key: 'ae3bb45bf136ab578d22629b6eec6017',
      language: locale,
      page: randomNumberFilter,
    },
  });
};
