import React from "react";
import "./App.css";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Containers/Menu/Menu";
import Banner from "./Containers/Banner";
import ScrollButton from "./Components/Scroll/scroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/menu" exact element={<Menu />} />
        </Routes>
        <Routes>
          <Route path="/reserve" exact element={<Banner />} />
        </Routes>
        <ScrollButton/>
      </Router>
    </div>
  );
}

export default App;
