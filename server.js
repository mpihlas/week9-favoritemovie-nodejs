const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.send('<h1>I am Marie</h1>');
});

app.listen(4000, () => { 
    console.log('Server is running on Port 4000.')
});