import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails} from "./pages/MovieDetails"

export function App() {
  return (
    <Router>
      <header>

           <h1 className={styles.title}>Movies</h1>
           <Link to="/">Home</Link>
           <hr/>
           <Link to="/movies">Movies</Link>
           <hr/>

      </header>
      <main>
        <Routes>

         <Route exact path="/movies" element={<MoviesGrid/>}/>
         {/* <Route path="/"elemn>home</Route> */}




        </Routes>
      </main>
    </Router>
  );

}