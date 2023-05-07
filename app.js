const form = document.querySelector("form");

const imageGrid = document.querySelector(".image-grid");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const fileInput = form.elements["image-file"];
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const image = document.createElement("img");
      image.src = reader.result;

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image");
      imageContainer.appendChild(image);

      imageGrid.appendChild(imageContainer);

      form.reset(); // Clear the input field
    });

    reader.readAsDataURL(file);
  }
});
