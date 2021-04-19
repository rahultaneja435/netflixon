import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Moviesdata.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseUrl = "http://image.tmdb.org/t/p/original"
function Moviedata({title,fetchUrl,isLargeRow}) {
    const [moviesData,setMoviesData] = useState([]); // using react hook
    const [url,setTrailerurl] = useState("");
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
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
   const handleTrailer = (movie)=>
   {
    if(url)
    {
        setTrailerurl('');
    }
    else{
        movieTrailer(movie?.name || "")
        .then((urlinfo)=>
        {
           const urlParams = new URLSearchParams(new URL(urlinfo).search);
           setTrailerurl(urlParams.get('v'));
        }).catch((error)=>console.log(error));
    }
   }
    return (
        <div className="movie_header">
            <h2 style={{color:"white",textAlign:"left"}}>{title}</h2>
        <div className="movie_container">
            {moviesData.map(resp =>(
                <img 
                key={resp.id}
                onClick={()=>handleTrailer(resp)}
                className={`images ${isLargeRow && "images1"}`} src={`${baseUrl}${isLargeRow ? resp.poster_path : resp.backdrop_path}`} alt={resp.name}/>
            ))}
        </div>
        {url && <YouTube videoId={url} opts={opts}/>}
        </div>
    )
}

export default Moviedata
