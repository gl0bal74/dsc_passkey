const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let isPasskeyPressed = false;

app.use(express.json());

app.post('/press-passkey', (req, res) => {
  isPasskeyPressed = true;
  res.status(200).send('Passkey pressed');
});

app.get('/check-passkey', (req, res) => {
  res.json({ pressed: isPasskeyPressed });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});