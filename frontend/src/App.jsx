// import { useState } from 'react'
import Sidebar from "./components/Sidebar";
import SearchWindow from "./components/SearchWindow";

function App() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <SearchWindow />
      </div>
    </>
  );
}

export default App;
