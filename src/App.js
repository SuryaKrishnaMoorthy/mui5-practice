import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import "./App.css";
import Home from "./Pages/Home";
import Tour from "./Pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
