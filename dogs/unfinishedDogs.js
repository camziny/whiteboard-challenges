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

// Your task: Write JavaScript to display the dog cards in the row_container

// 1. Loop through the `dogs` array using `.forEach()`

// 2. For each dog:
//    a. Create a new `div` element with the class `column`
//    b. Create an `img` element and set its `src` to the dog's image URL and `alt` to the dog's title
//    c. Create an `h4` element and set its text content to the dog's title

// 3. Append the `img` and `h4` elements to the `column` div

// 4. Append the `column` div to the `row_container` div (use `document.getElementById` to find it)
