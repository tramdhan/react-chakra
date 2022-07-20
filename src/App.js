import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./store";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import About from "./components/About";
import DataTable from "./components/DataTable/index_antd";
import FileUpload from "./components/FileUpload";
import QnA from "./components/QnA";
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
          <Route path="/datatable" element={<DataTable />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/qna" element={<QnA />} />
        </Routes>
      </BrowserRouter>
    </div>
  ));
}

export default App;
