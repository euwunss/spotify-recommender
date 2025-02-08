import { useState } from "react";
import logo from "/src/assets/Spotify_Full_Logo_RGB_White.png";
import "/src/style.css";

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
    { name: "Home", icon: "src/assets/spotify-512.png" },
    { name: "Search", icon: "src/assets/spotify-512.png" },
    { name: "Your Library", icon: "src/assets/spotify-512.png" },
    { name: "Create Playlist", icon: "src/assets/spotify-512.png" },
    { name: "Liked Songs", icon: "src/assets/spotify-512.png" },
    { name: "Similar Songs", icon: "src/assets/generate.png" },
  ];

  return (
    <>
      <nav>
        <ul className="links">
          <div className="links-main">
            {links.map((item, index) => (
              <li key={index} className="links-item">
                <img src={item.icon} alt="" />
                <a
                  href="#"
                  className={`${activeLink === index ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(index);

                    if (index === 5) {
                      setIsPopupVisible(true);
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
