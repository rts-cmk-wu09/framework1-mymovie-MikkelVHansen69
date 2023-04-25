import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreButton from "./components/SeeMoreButton";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        {/* <Heading text="MyMovies" size="16px" type="h1" /> */}
        <h1 style={{ fontSize: "16px", justifySelf: "center", gridColumnStart: 2, }}>MyMovies</h1>
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <h2></h2>
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
