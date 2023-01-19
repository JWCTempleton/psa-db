import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const styles = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "baseline",
  border: "1px solid white",
  width: "50vw",
  margin: "2rem",
  borderRadius: "5px",
};

type Cards = {
  id: number;
  company: string;
  description: string;
  notes: string | null;
  service: string;
  status: string;
};

const Card = (props: {
  id:
    | number
    | Key
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined;
  company:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  notes:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  service:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  status:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  card: {
    id: number;
    company: string;
    description: string;
    notes: string | null;
    service: string;
    status: string;
  };
}) => {
  console.log("Card", props.card.description);
  return (
    <div className="card" style={styles as React.CSSProperties}>
      <p>ID: {props.card.id}</p>
      <p>Company: {props.card.company}</p>
      <p>Description: {props.card.description}</p>
      {props.card.notes && <p>Notes: {props.card.notes}</p>}
      <p>Service: {props.card.service}</p>
      <p>Status: {props.card.status}</p>
    </div>
  );
};

export default Card;
