import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
