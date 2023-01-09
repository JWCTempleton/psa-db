import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const cards = [
  {
    id: 1,
    company: "Panini",
    description: "2018-19 Panini Prizm #280 Luka Doncic (RC)",
    notes: null,
    service: "Express",
    received: "2022-10-18",
    submitted: "2022-10-20",
    status: "pending",
  },
  {
    id: 2,
    company: "Upper Deck",
    description: "2009-10 Upper Deck Star Rookies RC #234",
    notes: null,
    service: "Super Express",
    received: "2022-10-21",
    submitted: "2022-10-24",
    status: "pending",
  },
  {
    id: 3,
    company: "Topps",
    description: "2005-6 Chris Paul Topps Chrome Refractor Rookie Card #168",
    notes: "Autographed",
    service: "Super Express",
    received: "2022-10-22",
    submitted: "2022-10-25",
    status: "pending",
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>
);
