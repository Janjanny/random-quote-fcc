import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const gradientList = {
    1: { c1: "#40c9ff", c2: "#e81cff" },
    2: { c1: "#fff95b", c2: "#ff930f" },
    3: { c1: "#f89b29", c2: "#ff0f7b" },
  };

  const [quote, setQuote] = useState("Loading...");
  useEffect(() => {
    //API initial request
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data[0]);
      });
  }, []);

  // console.log(quote.content);

  const newButton = () => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <main className="main">
      <div className="card">
        <h1 className="quote-icon">''</h1>
        <p className="quote-text">{quote.content}</p>
        <p className="quote-author">- {quote.author}</p>
        <button className="quote-btn" onClick={newButton}>
          New Quote
        </button>
      </div>
    </main>
  );
}
