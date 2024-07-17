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
   npm install

3. Ensure Docker and Docker Compose are installed.Then start Docker services in the project directory(make sure docker desktop is running):
   docker-compose up -d

4. Create Kafka Topic
  1.Execute the following command to enter the Kafka container:
  docker ps
  
  2.Find the Kafka container ID, then execute the following command to enter the container:
  docker exec -it <kafka container ID> bash
  
  3.Once inside the container, create the Kafka topic:
  bin/kafka-topics.sh --create --topic stock-price --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

5. Start the Producer and Consumer
Start the producer and consumer in the project directory:
node producer.js

Open another terminal window, in the project directory, start the consumer:
node consumer.js

6.Open a browser and visit http://localhost:3000 
