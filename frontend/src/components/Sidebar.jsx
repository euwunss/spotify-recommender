import { useState } from "react";
import logo from "/src/assets/Spotify_Full_Logo_RGB_White.png";
import "/src/style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <img className="logo" src={logo} alt="Spotify Logo" />
          <Navigation />
        </div>
      </div>
    </>
  );
}

function Navigation() {
  const [activeLink, setActiveLink] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const links = [
    {
      name: "Home",
      icon: "src/assets/Screenshot 2025-02-08 120616.png",
      path: "/",
    },
    {
      name: "Search",
      icon: "src/assets/Screenshot 2025-02-08 120637.png",
      path: "/search",
    },
    {
      name: "Your Library",
      icon: "src/assets/Screenshot 2025-02-08 120642.png",
      path: "/library",
    },
    {
      name: "Create Playlist",
      icon: "src/assets/Screenshot 2025-02-08 120649.png",
      path: "/create-playlist",
    },
    {
      name: "Liked Songs",
      icon: "src/assets/Screenshot 2025-02-08 120658.png",
      path: "/liked-songs",
    },
    {
      name: "Similar Songs",
      icon: "src/assets/generate.png",
      path: "/similar-songs",
    },
  ];

  return (
    <>
      <nav>
        <ul className="links">
          <div className="links-main">
            {links.map((item, index) => (
              <li key={index} className="links-item">
                <img src={item.icon} alt="" />
                <Link
                  to={item.path}
                  className={`${activeLink === index ? "active" : ""}`}
                  onClick={() => {
                    setActiveLink(index);

                    if (index === 5) {
                      setIsPopupVisible(true);
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
