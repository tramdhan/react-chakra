import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./store";
import Home from "./components/Home";
import "./App.css";

function App() {
  const { mainStore, userStore } = useStores();
  return useObserver(() => (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  ));
}

export default App;
