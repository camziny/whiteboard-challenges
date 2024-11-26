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

plants.forEach((plant, index) => {
  if (index % 3 === 0) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    document.body.appendChild(newRow);
  }

  const column = document.createElement("div");
  column.className = "column";

  const img = document.createElement("img");
  img.src = plant.img;
  img.className = "img";
  img.alt = plant.title;

  const title = document.createElement("h4");
  title.textContent = plant.title;

  const description = document.createElement("p");
  description.textContent = `Rating: ${plant.rating}`;

  column.appendChild(img);
  column.appendChild(title);
  column.appendChild(description);

  const rows = document.querySelectorAll(".row");
  const currentRow = rows[rows.length - 1];
  currentRow.appendChild(column);
});
