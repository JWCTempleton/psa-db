const express = require("express");
const app = express();

app.use(express.json());

let cards = [
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
  {
    id: 4,
    company: "Fleer",
    description: "Curry Card",
    notes: "",
    service: "super-express",
    received: "2023-01-13T02:51:32.621Z",
    submitted: null,
    status: "pending",
  },
  {
    id: 5,
    company: "Topps",
    description: "Durant Card",
    notes: "Autographed",
    service: "walk-through",
    received: "2023-01-13T22:35:32.708Z",
    submitted: null,
    status: "pending",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/cards", (request, response) => {
  response.json(cards);
});

app.get("/api/cards/:id", (request, response) => {
  const id = Number(request.params.id);
  const card = cards.find((card) => card.id === id);
  card ? response.json(card) : response.status(404).end();
});

app.delete("/api/cards/:id", (request, response) => {
  const id = Number(request.params.id);
  cards = cards.filter((card) => card.id !== id);

  response.status(204).end();
});

app.post("/api/cards", (request, response) => {
  const maxId = cards.length > 0 ? Math.max(...cards.map((n) => n.id)) : 0;

  const card = request.body;
  card.id = maxId + 1;
  console.log(card);

  cards = cards.concat(card);
  response.json(card);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
