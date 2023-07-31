const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Index sayfasına hoşgeldin.</h1>');
});

app.listen(port, () => {
  console.log(`Sunucu olarak ${port} potunda açık...`);
});
