import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import cardService from "./services/cards";

const styles = {
  display: "flex",
  flexDirection: "column" as "column",
  width: "30rem",
  margin: "0 auto",
  gap: "2rem",
  border: "1px solid white",
  padding: "2rem",
  borderRadius: "5px",
};

function App() {
  const [cardData, setCardData] = useState<any[]>([]);
  const [newCard, setNewCard] = useState({
    company: "",
    description: "",
    notes: "",
    service: "",
  });

  useEffect(() => {
    cardService.getAll().then((response) => {
      setCardData(response);
    });
  }, []);

  const handleNewCard = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setNewCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const addNewCard = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newCardObject = {
      company: newCard.company,
      description: newCard.description,
      notes: newCard.notes,
      service: newCard.service,
    };
    cardService.create(newCardObject).then((response) => {
      setCardData(cardData.concat(response));
    });
    setNewCard({
      company: "",
      description: "",
      notes: "",
      service: "",
    });
  };
  console.log("new card", newCard);

  type CardsProps = {
    id: string;
    company: string;
    description: string;
    notes: string | null;
    service: string;
    status: string;
  };

  console.log("data", cardData);

  return (
    <div className="App">
      <form style={styles as React.CSSProperties} onSubmit={addNewCard}>
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={newCard.company}
          onChange={handleNewCard}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newCard.description}
          onChange={handleNewCard}
        />
        <textarea
          placeholder="Notes"
          name="notes"
          value={newCard.notes}
          onChange={handleNewCard}
        />
        <label htmlFor="service">Service Level</label>
        <select
          id="service"
          value={newCard.service}
          name="service"
          onChange={handleNewCard}
        >
          <option value="walk-through">Walk Through</option>
          <option value="super-express">Super-Express</option>
          <option value="express">Express</option>
          <option value="regular">Regular</option>
          <option value="value">Value</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {cardData.map((card: CardsProps) => {
        let c = card as CardsProps;
        return <Card key={card.id} card={c} />;
      })}
    </div>
  );
}

export default App;
