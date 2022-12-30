import {FAV_LIST} from './type';

export const setFavList = item => ({
  type: FAV_LIST,
  payload: item,
});
