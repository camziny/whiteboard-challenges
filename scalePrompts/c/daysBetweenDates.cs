using System;

namespace DaysBetweenDates
{
    public class Program
    {
        public static int DaysBetweenDates(DateTime start, DateTime end)
        {
            TimeSpan difference = end - start;
            return difference.Days;
        }

        public static void Main(string[] args)
        {
            DateTime start = new DateTime(2023, 6, 26);
            DateTime end = new DateTime(2023, 7, 3);

            int days = DaysBetweenDates(start, end);
            Console.WriteLine("The number of days between {0} and {1} is {2}.", start, end, days);
        }
    }
}
