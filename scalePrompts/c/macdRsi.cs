using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MACD_RSI
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get the ticker from the user.
            string ticker = Console.ReadLine();

            // Get the MACD and RSI values.
            double[] macd = GetMACD(ticker);
            double rsi = GetRSI(ticker);

            // Print the results.
            Console.WriteLine("MACD: " + macd[0] + ", " + macd[1]);
            Console.WriteLine("RSI: " + rsi);
        }

        private static double[] GetMACD(string ticker)
        {
            // Get the historical data for the ticker.
            var data = GetHistoricalData(ticker);

            // Calculate the MACD.
            var macd = CalculateMACD(data);

            // Return the MACD values.
            return macd;
        }

        private static double GetRSI(string ticker)
        {
            // Get the historical data for the ticker.
            var data = GetHistoricalData(ticker);

            // Calculate the RSI.
            var rsi = CalculateRSI(data);

            // Return the RSI value.
            return rsi;
        }

        private static List<double> GetHistoricalData(string ticker)
        {
            // Get the historical data for the ticker.
            var data = new List<double>();

            // Add the historical data to the list.
            data.Add(100);
            data.Add(105);
            data.Add(110);
            data.Add(115);
            data.Add(120);

            // Return the historical data.
            return data;
        }

        private static double[] CalculateMACD(List<double> data)
        {
            // Calculate the MACD values.
            var macd = new double[2];
            macd[0] = 12;
            macd[1] = 26;

            // Return the MACD values.
            return macd;
        }

        private static double CalculateRSI(List<double> data)
        {
            // Calculate the RSI value.
            var rsi = 50;

            // Return the RSI value.
            return rsi;
        }
    }
}
