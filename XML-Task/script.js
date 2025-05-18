const xhr = new XMLHttpRequest();

xhr.open("GET", "https://dummyjson.com/products");

xhr.onload = function () {
  const products = JSON.parse(xhr.responseText).products;
  const grid = document.querySelector(".grid");

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${p.thumbnail}" alt="${p.title}">
        <div class="info">
          <div class="title">${p.title}</div>
          <div class="price">${p.price} $</div>
          <div class="btns">
            <button class="primary">Read more</button>
            <button>Order</button>
          </div>
        </div>`;
    grid.appendChild(card);
  });
};

xhr.send();
