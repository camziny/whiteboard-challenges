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
            // Create a new personal assistant
            var assistant = new PersonalAssistant();

            // Set the assistant's name
            assistant.Name = "Jarvis";

            // Start the assistant
            assistant.Start();

            // Wait for the user to type a command
            Console.ReadLine();

            // Stop the assistant
            assistant.Stop();
        }
    }

    class PersonalAssistant
    {
        public string Name { get; set; }

        public void Start()
        {
            // Start listening for commands
            Console.WriteLine("Welcome to Jarvis, your personal assistant. What can I do for you?");
            Console.ReadLine();

            // Loop until the user types "stop"
            while (true)
            {
                // Get the user's command
                string command = Console.ReadLine();

                // Execute the command
                ExecuteCommand(command);
            }
        }

        public void Stop()
        {
            // Stop listening for commands
            Console.WriteLine("Goodbye.");
        }

        private void ExecuteCommand(string command)
        {
            // Parse the command
            var tokens = command.Split(' ');

            // Check if the command is valid
            if (tokens.Length == 0)
            {
                return;
            }

            // Execute the command
            switch (tokens[0])
            {
                case "open":
                    OpenApp(tokens[1]);
                    break;
                case "close":
                    CloseApp(tokens[1]);
                    break;
                case "search":
                    SearchWeb(tokens[1]);
                    break;
                case "set timer":
                    SetTimer(tokens[1]);
                    break;
                case "take screenshot":
                    TakeScreenshot();
                    break;
                default:
                    Console.WriteLine("I don't understand that command.");
                    break;
            }
        }

        private void OpenApp(string appName)
        {
            // Try to open the app
            try
            {
                Process.Start(appName);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Could not open app: {0}", ex.Message);
            }
        }

        private void CloseApp(string appName)
        {
            // Try to close the app
            try
            {
                Process.Kill(Process.GetProcessesByName(appName)[0]);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Could not close app: {0}", ex.Message);
            }
        }

        private void SearchWeb(string query)
        {
            // Open a web browser and search for the query
            Process.Start("https://www.google.com/search?q={0}", query);
        }

        private void SetTimer(string time)
        {
            // Create a new timer
            var timer = new System.Threading.Timer(DoSomething, null, TimeSpan.Parse(time), TimeSpan.FromSeconds(1));
        }

        private void DoSomething(object state)
        {
            // Do something
            Console.WriteLine("The timer has expired.");
        }

        private void TakeScreenshot()
        {
            // Take a screenshot of the desktop
            var screen = System.Drawing.Screen.PrimaryScreen;
            var image = new System.Drawing.Bitmap(screen.Bounds);
            image.Save(@"c:\temp\screenshot.png");
        }
    }
}
