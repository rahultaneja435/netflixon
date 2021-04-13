import React, { useEffect, useState } from 'react'
import requests from './request'
import './Banner.css'

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(()=>
    {
        async function fetcher()
        {
            await fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
            .then(resp=>resp.json())
            .then(data=>
                {
                    setMovie(data.results[Math.floor(Math.random() * data.results.length -1 )]);
                })
        }
        fetcher();
    },[])
    console.log(movie);
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("http://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}
       >
       <div className="banner_struct">
           <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
           <div className="banner_buttons">
               <button className="banner_button">Play</button>
               <button className="banner_button">My list</button>
           </div>
         <h1 className="banner_desc">{movie?.overview}</h1>  
       </div>
       </header>
    )
}

export default Banner
