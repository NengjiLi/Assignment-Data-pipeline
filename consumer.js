const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const consumer = new Consumer(
    client,
    [{ topic: 'stock-price', partition: 0 }],
    { autoCommit: true }
);

const express = require('express');
const app = express();

let stockPrices = [];

consumer.on('message', function (message) {
    console.log('Received:', message.value);
    stockPrices.push(message.value);
    if (stockPrices.length > 10) stockPrices.shift();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/prices', (req, res) => {
    res.json(stockPrices);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
