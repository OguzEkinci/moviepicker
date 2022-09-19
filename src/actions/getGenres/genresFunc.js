import React, { useState } from "react";
import { genres } from "./genresData";
const getGenres = (genresIds) => {
    const [genresNames, setGenreNames] = useState([])
    /*     genres.map((defaultGenres) => {
            genresIds.map((item) => {
                if (defaultGenres.id === item) {
                    // setGenreNames(prev => [...prev, defaultGenres?.name])
                    console.log("genresNames", genresNames)
                }
            })
        }) */
    return genresNames;
}
export { getGenres }