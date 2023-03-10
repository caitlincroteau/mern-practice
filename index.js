//requirements
const express = require("express");
const morgan = require("morgan");

//setup
const app = express();
const port = 3000;

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes/endpoints

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//CRUD operations

//CREATE one venue
app.post();

//READ all venues
app,get();

//READ one venue
app.get();

//UPDATE one venue
app.put();

//DELETE one venue
app.delete();


//listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
