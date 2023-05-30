import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./utils/Darkmode";

import Home from "./page/Home";
import Listmovies from "./page/Listmovies";

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listmovies" element={<Listmovies />} />
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

export default App;
