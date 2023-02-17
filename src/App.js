import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { FavouriteList } from "./components/FavouriteList"; */
import FavIndicator from "./components/FavouriteList";

function App() {
  return (
    <BrowserRouter>
      <FavIndicator></FavIndicator>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        {/* <Route path="/favourite" element={<FavouriteList />} /> */}
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
