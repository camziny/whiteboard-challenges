const is_valid_email = (email) => {
  // Valid email address regex
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;

  // Returns true if the email address is valid, false otherwise
  return regex.test(email);
};

const remove_invalid_emails = (emails) => {
  // Create an empty array to store the valid emails
  const valid_emails = [];

  // Loop through the emails array
  for (const email of emails) {
    // If the email is valid, add it to the valid_emails array
    if (is_valid_email(email)) {
      valid_emails.push(email);
    }
  }

  // Return the valid_emails array
  return valid_emails;
};

// Example
const emails = [
  "johndoe@example.com",
  "janedoe@example.com",
  "invalidemailaddress",
];

// Remove the invalid emails from the array
const valid_emails = remove_invalid_emails(emails);

// Print the valid emails
console.log(valid_emails);
