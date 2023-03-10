//requirements
const express = require("express");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//setup
const app = express();
const port = 3000;
dotenv.config();

//mongo database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

//sample database

const venues = {
  venue1: {
    name: "The Sydney Opera House",
    country: "Australia",
    capacity: 5738,
  },
  venue2: {
    name: "The Globe Theatre",
    country: "England",
    capacity: 1570,
  },
  venue3: {
    name: "La Comédie Française",
    country: "France",
    capacity: 2014,
  },
};

//routes/endpoints

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//CRUD operations

//CREATE one venue
app.post("/api/venues", (req, res) => {
  const newVenue = "venue4";
  venues[newVenue] = {
    name: "Teatro Caupolican",
    country: "Chile",
    capacity: 7000,
  };

  res
    .status(201)
    .send({ message: "Here is your new venue:", venue: venues["venue4"] });
});

// //READ all venues
app.get("/api/venues", (req, res) => {
  res
    .status(200)
    .send({ message: "Here are the venues in our database", venues: venues });
});

// //READ one venue
app.get("/api/venues/:id", (req, res) => {
  const { id } = req.params;
  const venue = venues[id];

  res.status(200).send({ message: "Here is the venue that you seek", venue });
});

// //UPDATE one venue
app.put("/api/venues/:id", (req, res) => {
  const { id } = req.params;
  const venue = venues[id];
  venue.capacity = 10;

  res.status(201).send({ message: "Updated venue!", venue });
});

// //DELETE one venue
app.delete("/api/venues/:id", (req, res) => {
  const { id } = req.params;
  delete venues[id];

  res.status(204).send();
});

//listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
