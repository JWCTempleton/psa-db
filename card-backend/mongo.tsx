// const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//   console.log("give password as argument");
//   process.exit(1);
// }

// const password = process.argv[2];

// const url = `mongodb+srv://jtempleton:${password}@cluster0.2ecpxzj.mongodb.net/cardApp?retryWrites=true&w=majority`;

// mongoose.set("strictQuery", false);
// mongoose.connect(url);

// const cardSchema = new mongoose.Schema({
//   company: String,
//   description: String,
//   notes: String || null,
//   service: String,
//   received: Date,
//   status: String,
// });
// const Card = mongoose.model("Card", cardSchema);

// const card = new Card({
//   company: "Panini",
//   description: "Doncic rookie card",
//   notes: null,
//   service: "Walk Through",
//   received: new Date(),
//   status: "Pending",
// });

// card.save().then((result) => {
//   console.log("Card saved!", result);
//   mongoose.connection.close();
// });

// // Note.find({}).then((result) => {
// //   result.forEach((note) => {
// //     console.log(note);
// //   });
// //   mongoose.connection.close();
// // });
