using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalAssistant
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create a list of commands that the assistant can understand.
            List<string> commands = new List<string>() { "open", "close", "search", "help", "quit" };

            // Create a loop to listen for user input.
            while (true)
            {
                // Get the user's input.
                string input = Console.ReadLine();

                // Check if the input is a command.
                if (commands.Contains(input))
                {
                    // Execute the command.
                    switch (input)
                    {
                        case "open":
                            Console.WriteLine("What would you like me to open?");
                            break;
                        case "close":
                            Console.WriteLine("What would you like me to close?");
                            break;
                        case "search":
                            Console.WriteLine("What would you like me to search for?");
                            break;
                        case "help":
                            Console.WriteLine("Here are the commands that I can understand:");
                            foreach (string command in commands)
                            {
                                Console.WriteLine("    " + command);
                            }
                            break;
                        case "quit":
                            Console.WriteLine("Goodbye!");
                            return;
                    }
                }
                else
                {
                    // The input was not a command, so just print it out.
                    Console.WriteLine(input);
                }
            }
        }
    }
}
