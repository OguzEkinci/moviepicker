import axios from 'axios';
import {locale} from '../../assets/util/phoneLanguage';
export const getFilterMovieDetail = (
  id,
  startDate,
  endDate,
  category,
  language,
) => {
  return axios({
    method: 'get',
    url: `https://api.themoviedb.org/3/discover/movie`,
    params: {
      api_key: 'ae3bb45bf136ab578d22629b6eec6017',
      language: locale,
      with_watch_monetization_types: 'flatrate',
      include_adult: false,
      page: id,
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
      with_genres: category.join(','),
      with_original_language: language.toString(),
    },
  });
};
