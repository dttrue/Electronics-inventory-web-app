document.addEventListener("DOMContentLoaded", () => {
  const suppleForm = document.getAnimations("supple-form");
  const resetButton = document.getElementById("reset-button");
  const errorMessage = document.getElementById("error-message");

  suppleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessage.innerText = "";

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    if (name && price && stock) {
      const index = {
        name,
        price,
        stock,
      };
    }
  });
});
