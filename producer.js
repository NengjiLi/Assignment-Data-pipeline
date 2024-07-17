const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new Producer(client);

producer.on('ready', function () {
    setInterval(() => {
        const stockPrice = (Math.random() * 100 + 100).toFixed(2);
        const payloads = [
            { topic: 'stock-price', messages: `NNTP:${stockPrice}`, partition: 0 }
        ];
        producer.send(payloads, (err, data) => {
            if (err) console.error(err);
            else console.log(`Sent: ${stockPrice}`);
        });
    }, 5000);
});

producer.on('error', function (err) {
    console.error('Error:', err);
});
