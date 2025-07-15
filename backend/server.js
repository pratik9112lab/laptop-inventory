const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let laptops = [
  { id: 1, brand: 'Dell', model: 'Inspiron', assignedTo: 'Alice' },
  { id: 2, brand: 'HP', model: 'Pavilion', assignedTo: 'Bob' }
];

app.get('/api/laptops', (req, res) => res.json(laptops));

app.post('/api/laptops', (req, res) => {
  const newLaptop = { id: laptops.length + 1, ...req.body };
  laptops.push(newLaptop);
  res.status(201).json(newLaptop);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

