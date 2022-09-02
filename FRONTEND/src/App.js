import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:5000");
        const data = await response.json();
        setItems(data);
      } catch {
        setError(true);
      }
    }
    getData();
  }, []);

  if (items.length < 1) {
    return (
      <div className="App">
        <p>Fetching inventory...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p>There was a problem.</p>
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => (
        <h2 key={crypto.randomUUID()}>{item.title}</h2>
      ))}
    </div>
  );
}

export default App;
