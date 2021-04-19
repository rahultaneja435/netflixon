import './App.css';
import Banner from './Banner';
import Moviedata from './Moviedata'
import Navbar from './Navbar';
import requests from './request'


// df80999fc0df517a0e15f3128dc6bb0b

function App() {
  return (
    <div className="App" style={{backgroundColor:"#111"}}>
    <Navbar/>
    <Banner/>
    <Moviedata title="Netflix Originals" 
    fetchUrl={requests.fetchNetflixOriginals} 
    isLargeRow/>
    <Moviedata title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Moviedata title="Action Movies" fetchUrl={requests.fetchActionmovies}/>
    <Moviedata title="Horror Movies" fetchUrl={requests.fetchHorrormovies}/>
    <Moviedata title="Romantic Movies" fetchUrl={requests.fetchRomancemovies}/>
    <Moviedata title="Documentaries" fetchUrl={requests.fetchdocumentaries}/>
    </div>
  );
}

export default App;
