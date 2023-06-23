import { CommerceCloud } from "salesforce-commerce-cloud";

const commerceCloud = new CommerceCloud({
  apiKey: "YOUR_API_KEY",
  apiSecret: "YOUR_API_SECRET",
  endpoint: "https://api.commercecloud.salesforce.com",
});

// Get the products from Salesforce Commerce Cloud.
const products = await commerceCloud.getProducts();

// Display the products on the ecommerce site.
for (const product of products) {
  // Do something with the product.
}

// Create a new HTML element to display the products.
const productListElement = document.createElement("ul");

// Loop through the products and add a new list item for each product.
for (const product of products) {
  const listItemElement = document.createElement("li");
  listItemElement.innerText = product.name;
  productListElement.appendChild(listItemElement);
}

// Append the product list element to the document body.
document.body.appendChild(productListElement);
