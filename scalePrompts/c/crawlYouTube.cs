using System;
using System.IO;
using System.Net;

namespace YoutubeCrawler
{
    class Program
    {
        static void Main(string[] args)
        {
            // Get the YouTube video ID from the command line argument.
            string videoId = args[0];

            // Create a URL to the YouTube API endpoint that returns the audio track for the video.
            string url = "https://www.youtube.com/get_video_info?video_id=" + videoId;

            // Make a GET request to the URL.
            WebRequest request = WebRequest.Create(url);
            request.Timeout = 10000;
            WebResponse response = request.GetResponse();

            // Get the response body as a string.
            string responseBody = response.ContentEncoding.GetString(response.InputStream);

            // Parse the response body to get the audio track URL.
            string audioTrackUrl = JsonConvert.DeserializeObject(responseBody)["url"];

            // Download the audio track to a file.
            string mp3FileName = videoId + ".mp3";
            DownloadFile(audioTrackUrl, mp3FileName);

            Console.WriteLine("MP3 file saved to: " + mp3FileName);
        }

        private static void DownloadFile(string url, string fileName)
        {
            // Create a new WebClient object.
            WebClient webClient = new WebClient();

            // Download the file to a local file.
            webClient.DownloadFile(url, fileName);
        }
    }
}
