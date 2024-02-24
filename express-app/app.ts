import express from 'express';
import cors from 'cors';

import { restaurants } from './restaurants.json';

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/restaurants', (req, res) => {
  res.status(200).send(restaurants);
});

app.post('/orders', (req, res) => {
  res.status(201).send({ id: Date.now().toString(), ...req.body });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
