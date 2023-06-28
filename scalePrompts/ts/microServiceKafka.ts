import { NestFactory } from "@nestjs/core";
import { KafkaMicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<KafkaMicroserviceOptions>(
    MyModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ["localhost:9092"], // Update with your Kafka broker's address
        },
        consumer: {
          groupId: "my-group-id", // Update with your consumer group ID
        },
      },
    }
  );
  await app.listenAsync();
}

bootstrap();
