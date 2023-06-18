const openNewPageAndRunScript = (url, script) => {
  // Open a new window.
  var newWindow = window.open(url, "_blank");

  // Run the script on the new window.
  newWindow.onload = function () {
    script();
  };

  // Close the new window.
  newWindow.close();
};

// Define the script to run on the new page.
const myScript = () => {
  alert("Hello, world!");
};

// Open a new page and run the script.
openNewPageAndRunScript("https://www.google.com/", myScript);

// Open a new window without running a script.
const newWindow = window.open("https://www.google.com/");
