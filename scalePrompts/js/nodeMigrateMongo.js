const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://wadepw:KeX8xF1UEAS8AMBe@cluster0.vincevw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const inputDbName = "sample_training";
const outputDbName = "output_training";

const os = require("os");
const numCores = os.cpus().length;
const { fork } = require("child_process");

async function main() {
  // Get the list of collections in the input database
  const collections = await client.db(inputDbName).listCollections();

  // Divide the work evenly by the number of available cores
  const chunks = partition(collections, numCores);

  // Create a child process for each chunk of work
  const processes = chunks.map(async (chunk) => {
    const child = fork(__filename, {
      args: [inputDbName, outputDbName, chunk],
      stdio: "inherit",
    });

    // Wait for the child process to finish
    await child.on("exit", (code) => {
      if (code !== 0) {
        throw new Error("Child process exited with code: " + code);
      }
    });
  });

  // Wait for all child processes to finish
  await Promise.all(processes);

  console.log("Migration complete!");
}

main().catch(console.error);

function partition(array, numPartitions) {
  const partitions = [];
  for (let i = 0; i < numPartitions; i++) {
    partitions.push(
      array.slice(
        (i * array.length) / numPartitions,
        ((i + 1) * array.length) / numPartitions
      )
    );
  }
  return partitions;
}
