using System;
using System.Threading.Tasks;
using Amazon.SQS;

namespace SQSHostedService
{
    public class SQSHostedService : BackgroundService
    {
        private readonly IAmazonSQS sqsClient;

        public SQSHostedService()
        {
            sqsClient = new AmazonSQSClient();
        }

        protected override async Task DoWorkAsync()
        {
            while (true)
            {
                // Get the messages from the queue
                var messages = await sqsClient.ReceiveMessageAsync(queueUrl: "<QUEUE_URL>");

                // Process the messages
                foreach (var message in messages)
                {
                    // Do something with the message
                    Console.WriteLine("Received message: {0}", message.Body);

                    // Delete the message from the queue
                    await sqsClient.DeleteMessageAsync(queueUrl: "<QUEUE_URL>", receiptHandle: message.ReceiptHandle);
                }

                // Wait for a few seconds before polling again
                await Task.Delay(TimeSpan.FromSeconds(5));
            }
        }
    }
}
