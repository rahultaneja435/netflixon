import './App.css';
import Banner from './Banner';
import Moviedata from './Moviedata'
import requests from './request'


// df80999fc0df517a0e15f3128dc6bb0b

function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
    <Banner/>
    <Moviedata title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Moviedata title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Moviedata title="Action Movies" fetchUrl={requests.fetchActionmovies}/>
    <Moviedata title="Horror Movies" fetchUrl={requests.fetchHorrormovies}/>
    </div>
  );
}

export default App;
