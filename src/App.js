import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Beers from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import NewBeerForm from "./pages/NewBeerForm";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeerForm />} />
      </Routes>
    </div>
  );
}

export default App;
