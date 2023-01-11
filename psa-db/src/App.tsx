import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const styles = {
  display: "flex",
  flexDirection: "column",
  width: "30rem",
  margin: "0 auto",
  gap: "2rem",
};

function App({ cards }) {
  const [cardData, setCardData] = useState(() => cards);
  const [newCard, setNewCard] = useState({
    company: "",
    description: "",
    notes: "",
    service: "",
  });

  return (
    <div className="App">
      <form style={styles}>
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={newCard.company}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newCard.description}
        />
        <textarea placeholder="Notes" name="notes" value={newCard.notes} />
        <label htmlFor="service">Service Level</label>
        <select id="service" value={newCard.service} name="service">
          <option value="walk-through">Walk Through</option>
          <option value="super-express">Super-Express</option>
          <option value="express">Express</option>
          <option value="regular">Regular</option>
          <option value="value">Value</option>
        </select>
      </form>
      {cardData.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default App;
