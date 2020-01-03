const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, server is running');
});

app.listen(3000, () => console.log('checkout port 3000 nhe !!!'));
