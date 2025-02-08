// import { useState } from 'react'
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <MainPage />
      </div>
    </>
  );
}

export default App;
