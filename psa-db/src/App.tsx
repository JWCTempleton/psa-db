import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App({ cards }) {
  const cardElement = cards.map((card) => <p>{card.company}</p>);
  return <div className="App">{cardElement}</div>;
}

export default App;
