using System;
namespace Tutorialsrack
{
class Program
{
/* How to Get Total Number of Days between Two Dates in C# */
static void Main(string[] args)
{
DateTime startDate = new DateTime(2019, 08, 14);
DateTime endDate = new DateTime(2020, 08, 13);
//create TimeSpan object
TimeSpan difference = endDate - startDate;
// Extract days
// Note: It will show 1 day less in total Days
// because it will include the start date Day
// but not include the endDate day (Excluded Date: 2020-08-13)
Console.WriteLine("Total Difference in days Between Two Dates: " + difference.TotalDays);
// If you want EndDate day will also include
// in total days then add 1 to TotalDays
Console.WriteLine("Total Difference in days Between Two Dates (After Including End Date Day): " + (difference.TotalDays+1));
//Hit ENTER to exit the program
Console.ReadKey();
}
}
}
