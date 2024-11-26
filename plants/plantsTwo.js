// Sample data
var plants = [
  {
    img: "https://m.media-amazon.com/images/I/717DHBLs22L._AC_SX425_.jpg",
    title: "Beautiful flower pot",
    rating: 4,
  },
  {
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/spilled-flowers-garden-ideas-fb.jpg",
    title: "Ugly flower pot",
    rating: 1,
  },
  {
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/spilled-flowers-garden-ideas-fb.jpg",
    title: "Not a flower pot",
    rating: 0,
  },
  {
    img: "https://m.media-amazon.com/images/I/717DHBLs22L._AC_SX425_.jpg",
    title: "Beautiful flower pot",
    rating: 4,
  },
  {
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/spilled-flowers-garden-ideas-fb.jpg",
    title: "Ugly flower pot",
    rating: 1,
  },
  {
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/spilled-flowers-garden-ideas-fb.jpg",
    title: "Not a flower pot",
    rating: 0,
  },
];

// Loop through each plant in the plants array
plants.forEach((plant, index) => {
  // Check if the current index is divisible by 3 to start a new row
  if (index % 3 === 0) {
    // Create a new row container for every 3 plants
    const newRow = document.createElement("div");
    newRow.className = "row"; // Assign the "row" class to the new div
    document.body.appendChild(newRow); // Add the new row to the document body
  }

  // Create a new column container for the plant
  const column = document.createElement("div");
  column.className = "column"; // Assign the "column" class to the div

  // Create an image element for the plant
  const img = document.createElement("img");
  img.src = plant.img; // Set the source of the image
  img.className = "img"; // Assign the "img" class to style it
  img.alt = plant.title; // Set the alt attribute for accessibility

  // Create a title element (h4) for the plant
  const title = document.createElement("h4");
  title.textContent = plant.title; // Set the text content to the plant's title

  // Create a paragraph element to display the plant's rating
  const description = document.createElement("p");
  description.textContent = `Rating: ${plant.rating}`; // Add rating information as text

  // Append the image, title, and description to the column
  column.appendChild(img);
  column.appendChild(title);
  column.appendChild(description);

  // Select all rows in the document
  const rows = document.querySelectorAll(".row");
  // Get the last row (where the new column will be added)
  const currentRow = rows[rows.length - 1];
  currentRow.appendChild(column); // Add the column to the current row
});
