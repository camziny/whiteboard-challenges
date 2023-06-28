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

async function migrateCollections() {
  const collections = await client.db(inputDbName).listCollections();
  const chunks = partition(collections, numCores);
  const processes = [];
  for (const chunk of chunks) {
    const child = fork(__filename, {
      stdio: "inherit",
      env: {
        INPUT_DB_NAME: inputDbName,
        OUTPUT_DB_NAME: outputDbName,
        COLLECTIONS: chunk,
      },
    });
    processes.push(child);
  }
  for (const child of processes) {
    await child.on("exit", () => {});
  }
}

migrateCollections();
