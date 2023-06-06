import cv2
import pytesseract

def interpret_captcha(image):

    grayscale_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    thresholded_image = cv2.threshold(grayscale_image, 120, 255, cv2.THRESH_BINARY)[1]

    text = pytesseract.image_to_string(thresholded_image)

    text = text.strip()

    return text

if __name__ == "__main__":
    image = cv2.imread("captcha.png")

    text = interpret_captcha(image)

    print(text)
