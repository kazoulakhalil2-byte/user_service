const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Khalil' },
    { id: 2, name: 'Sara' }
  ]);
});

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
