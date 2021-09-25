import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Trailer from "./components/Trailer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/trailers">
            <Trailer />
          </Route>
          <Route path="/">
            <Banner />

            <Row
              titles="TRENDING NOW"
              fetchUrl={requests.fetchTrending}
              isLargeRow={true}
            />
            <Row
              titles="MOVIEFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow={true}
            />
            <Row
              titles="TOP RATED"
              fetchUrl={requests.fetchTopRated}
              isLargeRow={true}
            />
            <Row
              titles="ACTION MOVIES"
              fetchUrl={requests.fetchActionMovies}
              isLargeRow={true}
            />
            <Row
              titles="COMEDY MOVIES"
              fetchUrl={requests.fetchComedyMovies}
              isLargeRow={true}
            />
            <Row
              titles="HORROR MOVIES"
              fetchUrl={requests.fetchHorrorMovies}
              isLargeRow={true}
            />
            <Row
              titles="ROMANTIC MOVIES"
              fetchUrl={requests.fetchRomanceMovies}
              isLargeRow={true}
            />
            <Row
              titles="DOCUMENTARIES"
              fetchUrl={requests.fetchDocumentaries}
              isLargeRow={true}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
