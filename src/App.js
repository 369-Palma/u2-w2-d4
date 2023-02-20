import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteList from "./components/FavouriteList";

function App() {
  /*   const mainUrl = `https://api.openweathermap.org/data/2.5/weather?lat=41.07&lon=16.52&appid=affeeeefd8a69ba026cefacfe17d898f`;
   */ /* const mainUrl= `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=affeeeefd8a69ba026cefacfe17d898f` */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<FavouriteList />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
