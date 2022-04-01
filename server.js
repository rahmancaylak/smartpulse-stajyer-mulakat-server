const express = require('express');
const app = express();
const request = require('request');

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  // read query parameters
  const endDate = req.query['endDate'];
  const startDate = req.query['startDate'];
  // API Link
  const url = `https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=${endDate}&startDate=${startDate}`;
  request(url).pipe(res);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
