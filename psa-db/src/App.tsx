import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App({ cards }) {
  const [cardData, setCardData] = useState(() => cards);

  return (
    <div className="App">
      {cardData.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default App;
