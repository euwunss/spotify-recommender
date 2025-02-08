import "/src/style.css";
import { useState } from "react";

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
              <UserInputComponent />
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

function UserInputComponent() {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput(`Your entered song: ${userInput}`);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="What's your reference song?"
          className="search-bar"
        />
      </div>
      <button onClick={handleSubmit} className="search-btn">
        Submit
      </button>

      {output && <p className="output-text">{output}</p>}
    </>
  );
}

export default SearchWindow;
