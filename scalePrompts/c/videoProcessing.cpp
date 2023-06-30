#include <opencv2/opencv.hpp>
#include <iostream>

int main(int argc, char** argv)
{
    // Check if video file name was passed
    if(argc < 2)
    {
        std::cout << "Please provide a video file name as a command line argument." << std::endl;
        return -1;
    }

    cv::VideoCapture cap(argv[1]); // open the video file
    if(!cap.isOpened())  // check if we succeeded
    {
        std::cout << "Cannot open the video file." << std::endl;
        return -1;
    }

    cv::namedWindow("Original Video", cv::WINDOW_NORMAL); // create a window to display the video
    cv::namedWindow("Grayscale Video", cv::WINDOW_NORMAL); // create a window to display the grayscale video

    // Get video properties
    int frame_width = cap.get(cv::CAP_PROP_FRAME_WIDTH);
    int frame_height = cap.get(cv::CAP_PROP_FRAME_HEIGHT);
    int fps = cap.get(cv::CAP_PROP_FPS);

    // Create video writer
    cv::VideoWriter video("GrayscaleVideo.avi", cv::VideoWriter::fourcc('M','J','P','G'), fps, cv::Size(frame_width,frame_height), false);

    while(1)
    {
        cv::Mat frame;

        bool success = cap.read(frame); // read a new frame from the video

        if (!success)
        {
            std::cout << "Cannot read the frame from the video file." << std::endl;
            break;
        }

        // Convert the frame to grayscale
        cv::Mat grayFrame;
        cv::cvtColor(frame, grayFrame, cv::COLOR_BGR2GRAY);

        // Write the frame into the file 'GrayscaleVideo.avi'
        video.write(grayFrame);

        // Show the frames
        cv::imshow("Original Video", frame);
        cv::imshow("Grayscale Video", grayFrame);

        // Wait for 10 ms until any key is pressed.
        // If the 'Esc' key is pressed, break the while loop.
        // If any other key is pressed, continue the loop 
        // If any key is not pressed within 10 ms, continue the loop
        if(cv::waitKey(10) == 27)
        {
            std::cout << "Esc key is pressed by the user. Stopping the video" << std::endl;
            break;
        }
    }

    cap.release();
    video.release();

    return 0;
}
