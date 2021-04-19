import React, { useEffect, useState } from 'react'
import requests from './request'
import './Banner.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Banner() {
    const [movie,setMovie] = useState([]);
    const [url,setTrailerurl] = useState("");

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
    function truncate(str,n)
    {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    const clicker =(movie)=>
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
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
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
               <button className="banner_button" onClick={()=>clicker(movie)}>Play</button>
               <button className="banner_button">My list</button>
           </div>
         <h1 className="banner_desc">{truncate(movie?.overview,150)}</h1>  
       </div>
       <div className="fade---bottom"/>
       {url && <YouTube videoId={url} opts={opts}/>}
       </header>
       
    )
}

export default Banner
