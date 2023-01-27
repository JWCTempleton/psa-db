import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { ReactPropTypes } from "react";

const styles = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "baseline",
  border: "1px solid white",
  width: "50vw",
  margin: "2rem",
  borderRadius: "5px",
};

type CardsProps = {
  card: {
    id: string;
    company: string;
    description: string;
    notes: string | null;
    service: string;
    status: string;
  };
};

const Card = (props: CardsProps) =>
  //   id:
  //     | string
  //     | Key
  //     | ReactElement<any, string | JSXElementConstructor<any>>
  //     | ReactFragment
  //     | null
  //     | undefined;
  //   company:
  //     | string
  //     | ReactElement<any, string | JSXElementConstructor<any>>
  //     | ReactFragment
  //     | ReactPortal
  //     | null
  //     | undefined;
  //   description:
  //     | string
  //     | ReactElement<any, string | JSXElementConstructor<any>>
  //     | ReactFragment
  //     | ReactPortal
  //     | null
  //     | undefined;
  //   notes:
  //     | string
  //     | ReactElement<any, string | JSXElementConstructor<any>>
  //     | ReactFragment
  //     | ReactPortal
  //     | null
  //     | undefined;
  //   service:
  //     | string
  //     | ReactElement<any, string | JSXElementConstructor<any>>
  //     | ReactFragment
  //     | ReactPortal
  //     | null
  //     | undefined;
  //   status:
  //     | string
  //     | ReactElement<any, string | JSXElementConstructor<any>>
  //     | ReactFragment
  //     | ReactPortal
  //     | null
  //     | undefined;

  {
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
