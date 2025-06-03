import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/Moviecontext";
import NavBar from "./components/navbar";

function App() {
  const movienum = 1;
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorite />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
