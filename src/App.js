import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./store";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import About from "./components/About";
import Tech from "./components/Tech";
import "./App.css";

function App() {
  const { mainStore, userStore } = useStores();
  return useObserver(() => (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  ));
}

export default App;
