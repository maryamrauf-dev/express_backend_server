const express = require("express");
const mongoose = require("mongoose");
const BMI = require("./models/bmi");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/bmiDB")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });


app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html'
  );
});

app.post("/calculate", async (req, res) => {
    const name = req.body.name;
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const bmi = Number(
        (weight / ((height / 100) ** 2)).toFixed(2)
    );
    const newBMI = await BMI.create({
        name: name,
        height: height,
        weight: weight,
        bmi: bmi
    });
    res.send(`<h1>${name}'s BMI is: ${bmi}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});