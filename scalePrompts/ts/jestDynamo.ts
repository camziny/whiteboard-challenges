import initListStorageDynamo from "./initListStorageDynamo";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { promiseMap } from "bluebird";

describe("initListStorageDynamo", () => {
  let client: DynamoDBClient;

  beforeEach(() => {
    client = new DynamoDBClient();
  });

  afterEach(() => {
    client.destroy();
  });

  it("should create a DynamoDBDocumentClient", async () => {
    const { putParams, listParams, getParam, removeParam } =
      await initListStorageDynamo(client, "tableName");
    expect(putParams).toBeInstanceOf(Function);
    expect(listParams).toBeInstanceOf(Function);
    expect(getParam).toBeInstanceOf(Function);
    expect(removeParam).toBeInstanceOf(Function);
  });

  it("should put params to DynamoDB", async () => {
    const params = [
      { id: 1, name: "param1" },
      { id: 2, name: "param2" },
    ];
    await initListStorageDynamo(client, "tableName").putParams(params);
    const items = await client.scan({ TableName: "tableName" });
    expect(items.Items).toEqual(params);
  });

  it("should list params from DynamoDB", async () => {
    const params = [
      { id: 1, name: "param1" },
      { id: 2, name: "param2" },
    ];
    await client.putItems({ TableName: "tableName", Items: params });
    const results = await initListStorageDynamo(
      client,
      "tableName"
    ).listParams();
    expect(results.items).toEqual(params);
  });

  it("should get param from DynamoDB", async () => {
    const param = { id: 1, name: "param1" };
    await client.putItem({ TableName: "tableName", Item: param });
    const result = await initListStorageDynamo(client, "tableName").getParam(
      param
    );
    expect(result).toEqual(param);
  });

  it("should remove param from DynamoDB", async () => {
    const param = { id: 1, name: "param1" };
    await client.putItem({ TableName: "tableName", Item: param });
    await initListStorageDynamo(client, "tableName").removeParam(param);
    const items = await client.scan({ TableName: "tableName" });
    expect(items.Items).toEqual([]);
  });
});
