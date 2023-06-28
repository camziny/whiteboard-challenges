// Import the Kafka modules
import { ClientKafka } from "@nestjs/microservices";
import { Kafkajs } from "kafkajs";

// Create a Kafka client
const kafkaClient = new ClientKafka({
  client: new Kafkajs(),
  brokers: ["localhost:9092"],
});

// Create a message handler
const messageHandler = async (message) => {
  console.log("Received message:", message);
};

// Subscribe to the topic
await kafkaClient.subscribe("my-topic", messageHandler);

// Send a message
await kafkaClient.send("my-topic", {
  message: "Hello, world!",
});
