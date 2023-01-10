const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  border: "1px solid white",
  width: "50vw",
  margin: "2rem",
  borderRadius: "5px",
};

const Card = ({ card }) => {
  return (
    <div className="card" style={styles} key={card.id}>
      <p>ID: {card.id}</p>
      <p>Company: {card.company}</p>
      <p>Description: {card.description}</p>
      {card.notes && <p>Notes: {card.notes}</p>}
      <p>Service: {card.service}</p>
      <p>Status: {card.status}</p>
    </div>
  );
};

export default Card;
