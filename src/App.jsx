import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function App() {
  return (
    <Router>
      <header>
       
          {/* <h1 className={styles.title}>Movies</h1> */}
           <Link to="/">Home</Link>
           <hr/>
           <Link to="/movie">Movie</Link>
           <hr/>
      
      </header>
      <main>
        <Routes>

         <Route exact path="/movie">Moviedfgadfgdafg</Route>
        <Route  path="/">home</Route>
       
          
            
          
        </Routes>
      </main>
    </Router>
  );
 
}