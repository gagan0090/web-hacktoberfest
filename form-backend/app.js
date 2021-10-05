const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);

  res.status(201).send({});
});

app.listen(3000, () => console.log("Server is running on PORT 3000"));
