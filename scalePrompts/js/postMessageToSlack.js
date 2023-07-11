const postMessageToSlack = (text, channel) => {
  // Get the Slack API token.
  const token = "YOUR_SLACK_API_TOKEN";

  // Create the request object.
  const request = {
    url: "https://api.slack.com/api/chat.postMessage",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      channel: channel,
      text: text,
    },
  };

  // Make the request.
  fetch(request)
    .then((response) => {
      // Check the response status code.
      if (response.status === 200) {
        // The message was posted successfully.
        console.log("Message posted successfully");
      } else {
        // An error occurred.
        console.log("Error posting message: " + response.status);
      }
    })
    .catch((error) => {
      // An error occurred.
      console.log("Error posting message: " + error);
    });
};
