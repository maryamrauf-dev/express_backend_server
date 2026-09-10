const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html'
  );
});

app.post('/calculate', (req, res) => {
  const num1=Number(req.body.height);
  const num2=Number(req.body.weight);
  const bmi = (num2 / ((num1 / 100) ** 2)).toFixed(2);
  res.send(`<h1>Your BMI is: ${bmi}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});