import Home from "./component/Home";
import January from "./component/1/January";
import February from "./component/2/February";
import J01 from "./component/1/J01"
import J10 from "./component/1/J10"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/january" element = {<January />} />
          <Route path = "/february" element = {<February />} />
          <Route path = "/january/0101" element = {<J01 />} />
          <Route path = "/january/0110" element = {<J10 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
