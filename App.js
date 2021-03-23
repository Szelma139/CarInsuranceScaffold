import "./App.css";

import React from "react";
import { MainPane } from "./MainPane";
import { RightPane } from "./RightPane";


function App() {
  return (
    <div className="app">
      <MainPane/>
      <RightPane/>
    </div>
  );
}

export default App;
