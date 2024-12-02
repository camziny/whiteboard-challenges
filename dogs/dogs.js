var dogs = [
  {
    img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "golden retrievers",
    description: "a pair of golden retrievers",
  },
  {
    img: "https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "husky",
    description: "a friendly husky",
  },
  {
    img: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "German Shepherd",
    description: "a chill german shepherd",
  },
];

dogs.forEach((dog) => {
  // Create the column
  const column = document.createElement("div");
  column.className = "column";

  // Create the image
  const img = document.createElement("img");
  img.src = dog.img;
  img.className = "img";
  img.alt = dog.title;

  const title = document.createElement("h4");
  title.textContent = dog.title;

  // Create the description
  const description = document.createElement("p");
  description.textContent = `Description: ${dog.description}`;

  // Append elements to the column
  column.appendChild(img);
  column.appendChild(title);
  column.appendChild(description);

  // Append the column to the row container
  document.getElementById("row_container").appendChild(column);
});
