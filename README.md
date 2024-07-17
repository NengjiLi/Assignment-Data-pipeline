# Assignment-Data-pipeline
# Kafka Stock Price Project

## Description
This project simulates stock prices and streams them in real-time using Kafka and a Node.js application.

## Prerequisites
- Docker
- Node.js

## Setup
1. Clone this repository github.com/NengjiLi/Assignment-Data-pipeline

2. Use command under project directory:
   _npm install_

3. Ensure Docker and Docker Compose are installed.Then start Docker services in the project directory(make sure docker desktop is running):
   _docker-compose up -d_

4. Create Kafka Topic
  1.Execute the following command to enter the Kafka container:
  _docker ps_
  
  2.Find the Kafka container ID, then execute the following command to enter the container:
  _docker exec -it <kafka container ID> bash_
  
  3.Once inside the container, create the Kafka topic:
  _bin/kafka-topics.sh --create --topic stock-price --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1_

5. Start the Producer and Consumer
Start the producer and consumer in the project directory:
_node producer.js_

Open another terminal window, in the project directory, start the consumer:
_node consumer.js_

6.Open a browser and visit http://localhost:3000 

And you will see something like this:
Real-Time Stock Prices
NNTP:176.94
NNTP:117.63
NNTP:116.51
NNTP:127.03
NNTP:106.57
NNTP:154.93
NNTP:193.03
NNTP:175.56
NNTP:131.80
NNTP:183.99
