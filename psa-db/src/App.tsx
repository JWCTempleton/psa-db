import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  border: "1px solid white",
  width: "50vw",
  margin: "2rem",
  borderRadius: "5px",
};

function App({ cards }) {
  const [cardData, setCardData] = useState(() => cards);

  console.log(cardData);

  const cardElement = cards.map((card) => (
    <div className="card" style={styles} key={card.id}>
      <p>ID: {card.id}</p>
      <p>Company: {card.company}</p>
      <p>Description: {card.description}</p>
      {card.notes && <p>Notes: {card.notes}</p>}
      <p>Service: {card.service}</p>
      <p>Status: {card.status}</p>
    </div>
  ));
  return <div className="App">{cardElement}</div>;
}

export default App;
