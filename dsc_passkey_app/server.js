const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let isPasskeyPressed = false;

app.use(express.json());

app.post('/press-passkey', (req, res) => {
    isPasskeyPressed = true;
    res.status(200).send('Passkey pressed');

    // Reset passkey status after 5 minutes (300000 milliseconds)
    setTimeout(() => {
        isPasskeyPressed = false;
    }, 300000);
});

app.post('/reset-passkey', (req, res) => {
    isPasskeyPressed = false;
    res.status(200).send('Passkey reset');
});

app.get('/check-passkey', (req, res) => {
    res.json({ pressed: isPasskeyPressed });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
