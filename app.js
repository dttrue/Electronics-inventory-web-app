document.addEventListener("DOMContentLoaded", () => {
  const inventory = [];

  function createInventoryItemCard(item) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");

    const itemImage = document.createElement("img");
    itemImage.setAttribute("src", item.img);

    const itemName = document.createElement("strong");
    itemName.textContent = item.name;

    const itemText = document.createElement("p");
    itemText.textContent = item.description;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;

    const itemStock = document.createElement("p");
    itemStock.textContent = `In Stock: ${item.stock}`;

    const orderSelector = document.createElement("div");
    orderSelector.classList.add("order-selector");

    const orderCount = document.createElement("span");
    orderCount.textContent = item.orderCount;

    const incrementButton = document.createElement("span");
    incrementButton.textContent = "➡️";

    const decrementButton = document.createElement("span");
    decrementButton.textContent = "⬅️";

    incrementButton.addEventListener("click", () => {
      orderCount.textContent = ++item.orderCount;
    });

    decrementButton.addEventListener("click", () => {
      if (item.orderCount > 0) {
        orderCount.textContent = --item.orderCount;
      }
    });

    orderSelector.appendChild(decrementButton);
    orderSelector.appendChild(orderCount);
    orderSelector.appendChild(incrementButton);

    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(itemStock);
    itemCard.appendChild(itemText);
    itemCard.appendChild(orderSelector);
    

    document.querySelector(".supplies").appendChild(itemCard);
  }

  function displayInventory() {
    for (const item of inventory) {
      createInventoryItemCard(item);
    }
  }

  function orderItem() {
    const orderedItems = inventory.filter((item) => item.orderCount > 0);
    if (orderedItems.length === 0) {
      alert("You have no items in your order.");
    } else {
      const message = orderedItems.map(
        (item) =>
          `${item.orderCount} order${item.orderCount > 1 ? "s" : ""} of ${
            item.name
          }`
      );
      alert(message.join("\n"));
    }
  }

  document.querySelector("#supply-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const newitem = {
      name: event.target.name.value,
      price: parseFloat(event.target.price.value),
      stock: parseInt(event.target.stock.value),
      img: event.target.img.value,
      orderCount: 0,
    };

    inventory.push(newitem);
    createInventoryItemCard(newitem);

    event.target.reset();
  });

  document.querySelector("#submit-button").addEventListener("click", orderItem);

  const inventoryItems = [
    {
      name: "Beats Fit Pro True Wireless Earbuds",
      price: 99.99,
      stock: 50,
      img: "imgs/ear_buds.jpeg",
      description: "Lorem ipsum dolor sit amet ",
      orderCount: 0,
    },
    {
      name: `LG, UHD 4K TV, 65 inch UR80 series`,
      price: 599.99,
      stock: 50,
      img: "imgs/tv.jpeg",
      description: "Lorem ipsum dolor sit amet ",
      orderCount: 0,
    },
    {
      name: ` Xbox Series X  Console  1TB SSD`,
      price: 349.99,
      stock: 50,
      img: "imgs/xbox.jpeg",
      description: "Lorem ipsum dolor sit amet ",
      orderCount: 0,
    },
    {
      name: `iPhone 15 Pro Max, 128 GB Pink Unlocked `,
      price: 799.99,
      stock: 50,
      img: "imgs/iphone.jpeg",
      description: "Lorem ipsum dolor sit amet sit amet, ipsum dolor sit  ",
      orderCount: 0,
    },
    {
      name: `Sony PlayStation 5 Digital Edition`,
      price: 399.99,
      stock: 50,
      img: "imgs/ps5.jpeg",
      description: "Lorem ipsum dolor amet ",
      orderCount: 0,
    },
    {
      name: ` Amazon Fire TV Stick 4K with, Voice Remote`,
      price: 29.99,
      stock: 50,
      img: "imgs/fire stick.jpeg",
      description: "Lorem ipsum dolor sit amet sit amet ipsu, dol.",
      orderCount: 0,
    },
   

  

  ];

  for (const item of inventoryItems) {
    inventory.push(item);
  }

  displayInventory();
});
