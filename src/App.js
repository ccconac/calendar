import January from "./component/January";
import February from "./component/February";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/january" element={<January />} />
          <Route path="/february" element={<February />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
