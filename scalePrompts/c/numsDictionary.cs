using System;

namespace NumbersDictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create a dictionary to store the numbers and their text-based values.
            Dictionary<int, string> numbersDictionary = new Dictionary<int, string>();

            // Add the numbers and their text-based values to the dictionary.
            numbersDictionary.Add(1, "One");
            numbersDictionary.Add(2, "Two");
            numbersDictionary.Add(3, "Three");
            numbersDictionary.Add(4, "Four");
            numbersDictionary.Add(5, "Five");
            numbersDictionary.Add(6, "Six");
            numbersDictionary.Add(7, "Seven");
            numbersDictionary.Add(8, "Eight");
            numbersDictionary.Add(9, "Nine");
            numbersDictionary.Add(10, "Ten");
            numbersDictionary.Add(11, "Eleven");
            numbersDictionary.Add(12, "Twelve");
            numbersDictionary.Add(13, "Thirteen");
            numbersDictionary.Add(14, "Fourteen");
            numbersDictionary.Add(15, "Fifteen");
            numbersDictionary.Add(16, "Sixteen");
            numbersDictionary.Add(17, "Seventeen");
            numbersDictionary.Add(18, "Eighteen");
            numbersDictionary.Add(19, "Nineteen");
            numbersDictionary.Add(20, "Twenty");

            // Print the dictionary.
            foreach (var item in numbersDictionary)
            {
                Console.WriteLine("{0}: {1}", item.Key, item.Value);
            }
        }
    }
}
