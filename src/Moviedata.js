import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Moviesdata.css"

const baseUrl = "http://image.tmdb.org/t/p/original"
function Moviedata({title,fetchUrl,isLargeRow}) {
    const [moviesData,setMoviesData] = useState([]); // using react hook
    // https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US
    useEffect(()=>
    {
        const fetcher = async ()=>
        {
            await fetch(`https://api.themoviedb.org/3${fetchUrl}`)
            .then(resp=>resp.json())
            .then(data=>
                {
                  setMoviesData(data.results);
                })
        //    const req = await axios.get(fetchUrl);
        //    console.log("hehhy",req);
        //    return req;
        }
        fetcher();
    },[fetchUrl]);
    console.log(moviesData)
    return (
        <div className="movie_header">
            <h2>{title}</h2>
        <div className="movie_container">
            {moviesData.map(resp =>(
                <img 
                key={resp.id}
                className={`images ${isLargeRow && "images1"}`} src={`${baseUrl}${isLargeRow ? resp.poster_path : resp.backdrop_path}`} alt={resp.name}/>
            ))}
        </div>
        </div>
    )
}

export default Moviedata
