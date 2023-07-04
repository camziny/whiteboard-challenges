using System;
using System.IO;
using System.IO.Compression;

public class StringToGZipConverter
{
    public static byte[] ConvertStringToGZip(string inputString)
    {
        byte[] inputBytes = System.Text.Encoding.UTF8.GetBytes(inputString);
        using (MemoryStream outputStream = new MemoryStream())
        {
            using (GZipStream gzipStream = new GZipStream(outputStream, CompressionMode.Compress))
            {
                gzipStream.Write(inputBytes, 0, inputBytes.Length);
            }
            return outputStream.ToArray();
        }
    }
}
