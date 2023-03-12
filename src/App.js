import Home from "./component/Home";
import January from "./component/1/January";
import J01 from "./component/1/J01"
import J10 from "./component/1/J10"
import February from "./component/2/February";
import March from "./component/3/March";
import April from "./component/4/April";
import May from "./component/5/May";
import June from "./component/6/June";
import July from "./component/7/July";
import August from "./component/8/August";
import September from "./component/9/September";
import October from "./component/10/October";
import November from "./component/11/November";
import December from "./component/12/December";
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
          <Route path = "/march" element = {<March />} />
          <Route path = "/april" element = {<April />} />
          <Route path = "/may" element = {<May />} />
          <Route path = "/june" element = {<June />} />
          <Route path = "/july" element = {<July />} />
          <Route path = "/august" element = {<August />} />
          <Route path = "/september" element = {<September />} />
          <Route path = "/october" element = {<October />} />
          <Route path = "/november" element = {<November />} />
          <Route path = "/december" element = {<December />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
