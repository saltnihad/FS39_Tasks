document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-container");

  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      const products = data.products;

      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
         <img class="product-img" src="${product.thumbnail}" alt="${product.title}">
          <div class="product-title">${product.title}</div>
          <div class="product-price">${product.price} AZN</div>
          <div class="product-rating">${product.rating}⭐</div>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Products couldn't be loaded!", error);
    });
});