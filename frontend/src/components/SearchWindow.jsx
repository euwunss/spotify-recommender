import "/src/style.css";

function SearchWindow() {
  return (
    <>
      <div className="container">
        <div className="popup">
          <header>
            <h1>Similar Song Generator</h1>
            <hr />
          </header>

          <main>
            <form action="/">
              <p>
                Enter a song you love, and the artist, and our algorithms will
                accurately analyze its melody, tempo, and mood to recommend
                tracks with comparable characteristics.
              </p>
              <br />
              <div className="search-container">
                <input
                  type="text"
                  name="input"
                  placeholder="What's your reference song?"
                  className="search-bar"
                />
              </div>
              <button className="search-btn">Search</button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default SearchWindow;
