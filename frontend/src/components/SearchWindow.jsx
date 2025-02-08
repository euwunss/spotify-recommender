import { useState } from "react";
import "/src/style.css";

function SearchWindow() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");

  const fetchRecommendations = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!song || !artist) {
      setError("Please enter both a song and an artist.");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/recommend?song=${encodeURIComponent(song)}&artist=${encodeURIComponent(artist)}`
      );

      const data = await response.json();
      if (response.ok) {
        setRecommendations(data.recommended_songs);
        setError("");
      } else {
        setError(data.error || "Error fetching recommendations.");
        setRecommendations([]);
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="popup">
          <header>
            <h1>Similar Song Generator</h1>
            <hr />
          </header>

          <main>
            <form onSubmit={fetchRecommendations}>
              <p>
                Enter a song you love, and the artist, and our algorithms will
                accurately analyze its melody, tempo, and mood to recommend
                tracks with comparable characteristics.
              </p>
              <br />
              <div className="search-container">
                <input
                  type="text"
                  placeholder="What's your reference song?"
                  className="search-bar"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter the artist"
                  className="search-bar"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </div>
              <button className="search-btn">Search</button>
            </form>

            {error && <p className="error">{error}</p>}

            <h2>Recommended Songs</h2>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>
                  {rec.track_name} by {rec.artists}
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}

export default SearchWindow;
