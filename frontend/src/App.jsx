// import { useState } from 'react'
import Sidebar from "./components/Sidebar";
// import SearchWindow from "./components/SearchWindow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import CreatePlaylist from "./pages/CreatePlaylist";
import LikedSongs from "./pages/LikedSongs";
import SimilarSongs from "./pages/SimilarSongs";

function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
            <Route path="/similar-songs" element={<SimilarSongs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
