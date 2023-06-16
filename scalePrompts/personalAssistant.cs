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
            Console.WriteLine("Hello! I am your personal assistant. How can I help you today?");
            string input = Console.ReadLine();
            if (input == "What is your name?")
            {
                Console.WriteLine("My name is Bard.");
            }
            else if (input == "What can you do?")
            {
                Console.WriteLine("I can help you with a variety of tasks, such as setting reminders, searching for information, and controlling your smart home devices.");
            }
            else if (input == "Can you tell me a joke?")
            {
                Console.WriteLine("Sure, here is a joke: What do you call a fish with no eyes? Fsh!");
            }
            else
            {
                Console.WriteLine("I'm sorry, I don't understand your request.");
            }
        }
    }
}
