import January from "./component/month/january";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<January />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
