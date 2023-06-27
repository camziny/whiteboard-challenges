using System;
using System.Diagnostics;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Press Enter to continue...");

        // Create a new process object.
        Process proc = new Process();

        // Set the process start information.
        ProcessStartInfo startInfo = new ProcessStartInfo("cmd");
        startInfo.Arguments = "/C pause >nul";
        startInfo.UseShellExecute = false;
        startInfo.WindowStyle = ProcessWindowStyle.Hidden;

        // Start the process.
        proc.Start(startInfo);

        // Wait for the process to exit.
        proc.WaitForExit();
    }
}
