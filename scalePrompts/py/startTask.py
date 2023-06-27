import threading
import time


def automationSeleniumMethodLongTasks(callback):
    """This is a long-running task that takes about 10 minutes to finish.

    Args:
      callback: A callback function that will be called when the task is finished.
    """
    print("Starting long-running task...")
    time.sleep(600)
    print("Long-running task finished.")
    callback()


def start_background_task(callback):
    """Starts a long-running task in a background thread.

    Args:
      callback: A callback function that will be called when the task is finished.
    """
    thread = threading.Thread(target=automationSeleniumMethodLongTasks, args=[callback])
    thread.daemon = True
    thread.start()


def callbackResponse(http):
    """This is a callback function that is called when the long-running task is finished.

    Args:
      http: The HTTP response object.
    """
    http.status_code = 200
    http.headers["Content-Type"] = "application/json"
    http.body = '{"message": "Task finished successfully."}'


app = Flask(__name__)


@app.route("/start_task", methods=["POST"])
def start_task():
    """This endpoint starts a long-running task in a background thread.

    Returns:
      An HTTP response object with a 202 Accepted status code.
    """
    callback = lambda: callbackResponse(request.environ["werkzeug.serving.request"])
    start_background_task(callback)
    return Response(status=202)


if __name__ == "__main__":
    app.run(debug=True)
