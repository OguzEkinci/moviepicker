import React from 'react'
import axios from 'axios'

export const getMovieDetail = (id) => {
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
            api_key: "ae3bb45bf136ab578d22629b6eec6017",
            language: "en",
        },
    })
};

export const getFilterMovieDetail = (id,startDate,endDate) => {
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie`,
        params: {
            api_key: "ae3bb45bf136ab578d22629b6eec6017",
            language: "en",
            with_watch_monetization_types: 'flatrate',
            include_adult: false,
            page: id,
            "primary_release_date.gte":`${startDate}`,
            "primary_release_date.lte":`${endDate}`
        },
    })
};