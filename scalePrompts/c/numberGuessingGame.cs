using System;

namespace NumberGuessingGame
{
    class Program
    {
        static void Main(string[] args)
        {
            // Generate a random number between 1 and 100.
            Random random = new Random();
            int secretNumber = random.Next(1, 101);

            // Initialize the number of guesses.
            int guesses = 0;

            // Start the game loop.
            while (guesses < 10)
            {
                // Get the player's guess.
                Console.WriteLine("Guess a number between 1 and 100: ");
                string guessString = Console.ReadLine();
                int guess = int.Parse(guessString);

                // Check if the guess is correct.
                if (guess == secretNumber)
                {
                    Console.WriteLine("Congratulations! You guessed the correct number!");
                    break;
                }
                else if (guess < secretNumber)
                {
                    Console.WriteLine("Your guess is too low.");
                }
                else
                {
                    Console.WriteLine("Your guess is too high.");
                }

                // Increment the number of guesses.
                guesses++;
            }

            // If the player has run out of guesses, end the game.
            if (guesses == 10)
            {
                Console.WriteLine("You lose! The secret number was {0}.", secretNumber);
            }
        }
    }
}
