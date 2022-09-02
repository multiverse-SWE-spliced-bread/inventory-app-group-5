import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);


  async function getAllItems() {
    try {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();
      setItems(data);
    } catch {
      setError(true);
    }
  }

  async function getOneItem(id) {
    try {
      const response = await fetch(`http://localhost:5000/${id}`);
      const data = await response.json();
      setItems([data]);
      console.log(data);
    } catch {
      setError(true);
    }
  }


  useEffect(() => {

    getAllItems();
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

  if (items.length === 1) {
    return (
      <>
        <h3>{items[0].title}</h3>
        <h3>£{items[0].price}</h3>
        <p>{items[0].description}</p>
        <img class="image" id='a' src={items[0].image} alt=""/>
      </>
    )
  }
  else {
    return (
      <>
        {
          items.map((item) => {
            return <>
              <div>
                <h2 onClick={() => getOneItem(item.id)}>{item.title}</h2>
              </div>
            </>
          })
        }
      </>)
  }
}


export default App;
