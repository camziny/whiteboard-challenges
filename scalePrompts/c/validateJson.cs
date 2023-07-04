using System;
using System.Text.Json;

namespace JsonSchemaValidation
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create the JSON schema.
            string schema = @"{
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer"
                    }
                }
            }";

            // Create the JSON file.
            string json = @"{
                "name": "John Doe",
                "age": 30
            }";

            // Create the `JsonSchema` object.
            JsonSchema schemaObject = JsonSchema.Parse(schema);

            // Create the `JToken` object.
            JToken jsonObject = JToken.Parse(json);

            // Validate the JSON file.
            bool isValid = jsonObject.IsValid(schemaObject);

            if (isValid)
            {
                Console.WriteLine("The JSON file is valid.");
            }
            else
            {
                Console.WriteLine("The JSON file is invalid.");
                Console.WriteLine("Validation errors:");
                foreach (var error in jsonObject.IsValid(schemaObject, true))
                {
                    Console.WriteLine(error);
                }
            }
        }
    }
}
