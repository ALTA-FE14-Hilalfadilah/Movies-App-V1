import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Listmovies from "./page/Listmovies";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listmovies" element={<Listmovies />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
