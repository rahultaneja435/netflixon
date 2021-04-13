const apiKey ="df80999fc0df517a0e15f3128dc6bb0b";

const requests ={
   fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
   fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213`,
   fetchToprated:`/movie/top_rated/tv?api_key=${apiKey}&language=en-US`,
   fetchActionmovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
   fetchHorrormovies:`/discover/movie?api_key=${apiKey}&with_genres=27`,
   fetchRomancemovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
   fetchdocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`
}

export default requests;