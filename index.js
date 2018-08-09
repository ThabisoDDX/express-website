import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>ExpressJS Boilerplate</h1>');
})

app.listen(PORT, () =>
  console.log(`Your server is listening on http://localhost:${PORT}`)
);
