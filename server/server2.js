const express = require('express');
const app = express();
const port = 3333;

const data = [];

app.post('/analytics', (req, res) => {
    data.push(Date.now());
    console.log('Request received at:');
    console.log(data[data.length - 1]);
    console.log('Total requests:', data.length);
    res.status(200).send({ message: 'ok' });
});

app.listen(port, (err) => {
    if (err) {
        console.log('Bad things', err);
        return;
    }
    console.log('Listening on port', port);
});
