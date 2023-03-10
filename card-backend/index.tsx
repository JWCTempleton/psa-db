require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Card = require("./models/card.tsx");

const requestLogger = (request, response, next) => {
  console.log("Method: ", request.method);
  console.log("Path: ", request.path);
  console.log("Body: ", request.body);
  console.log("----");
  next();
};

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use(requestLogger);

// let cards = [
//   {
//     id: 1,
//     company: "Panini",
//     description: "2018-19 Panini Prizm #280 Luka Doncic (RC)",
//     notes: null,
//     service: "Express",
//     received: "2022-10-18",
//     submitted: "2022-10-20",
//     status: "pending",
//   },
//   {
//     id: 2,
//     company: "Upper Deck",
//     description: "2009-10 Upper Deck Star Rookies RC #234",
//     notes: null,
//     service: "Super Express",
//     received: "2022-10-21",
//     submitted: "2022-10-24",
//     status: "pending",
//   },
//   {
//     id: 3,
//     company: "Topps",
//     description: "2005-6 Chris Paul Topps Chrome Refractor Rookie Card #168",
//     notes: "Autographed",
//     service: "Super Express",
//     received: "2022-10-22",
//     submitted: "2022-10-25",
//     status: "pending",
//   },
//   {
//     id: 4,
//     company: "Fleer",
//     description: "Curry Card",
//     notes: "",
//     service: "super-express",
//     received: "2023-01-13T02:51:32.621Z",
//     submitted: null,
//     status: "pending",
//   },
//   {
//     id: 5,
//     company: "Topps",
//     description: "Durant Card",
//     notes: "Autographed",
//     service: "walk-through",
//     received: "2023-01-13T22:35:32.708Z",
//     submitted: null,
//     status: "pending",
//   },
// ];

// app.get("/", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

app.get("/api/cards", (request, response) => {
  Card.find({}).then((cards) => {
    response.json(cards);
  });
});

app.get("/api/cards/:id", (request, response) => {
  Card.findById(request.params.id).then((card) => {
    response.json(card);
  });
});

// app.delete("/api/cards/:id", (request, response) => {
//   const id = Number(request.params.id);
//   cards = cards.filter((card) => card.id !== id);

//   response.status(204).end();
// });

// Just to ensure ever ID is unique, will be replaced with library in the future
// const generateId = () => {
//   const maxId = cards.length > 0 ? Math.max(...cards.map((n) => n.id)) : 0;
//   return maxId + 1;
// };

app.post("/api/cards", (request, response) => {
  const body = request.body;

  if (!body.company || !body.description) {
    return response.status(400).json({
      error: "company or description missing",
    });
  }

  const card = new Card({
    company: body.company,
    description: body.description,
    notes: body.notes || null,
    received: new Date(),
    service: body.service,
    submitted: "pending",
    status: "pending",
  });

  card.save().then((savedCard) => {
    response.json(savedCard);
  });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
