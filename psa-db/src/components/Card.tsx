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

interface Cards {
  id: string;
  company: string;
  description: string;
  notes: string | null;
  service: string;
  status: string;
}

const Card: React.FunctionComponent<Cards> = (props) =>
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
    const { id, company, description, notes, service, status } = props;
    return (
      <div className="card" style={styles as React.CSSProperties}>
        <p>ID: {id}</p>
        <p>Company: {company}</p>
        <p>Description: {description}</p>
        {notes && <p>Notes: {notes}</p>}
        <p>Service: {service}</p>
        <p>Status: {status}</p>
      </div>
    );
  };

export default Card;
