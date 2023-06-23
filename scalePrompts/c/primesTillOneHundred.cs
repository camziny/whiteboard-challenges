using System;

public class Program {
    public static void Main(string[] args) {
        // Declare an array to store the prime numbers
        int[] primes = new int[100];

        // Initialize the array elements to 0
        for (int i = 0; i < primes.Length; i++) {
            primes[i] = 0;
        }

        // Loop from 2 to 100
        for (int i = 2; i <= 100; i++) {
            // Check if the number is prime
            bool isPrime = true;
            for (int j = 2; j <= Math.Sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }

            // If the number is prime, store it in the array
            if (isPrime) {
                primes[i - 2] = i;
            }
        }

        // Print the prime numbers
        Console.WriteLine("The prime numbers till 100 are:");
        for (int i = 0; i < primes.Length; i++) {
            if (primes[i] != 0) {
                Console.WriteLine(primes[i]);
            }
        }
    }
}
