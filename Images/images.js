const init = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10");
    if (!response.ok) {
      throw new Error("API error");
    }
    let data = await response.json();

    let gallery = document.querySelector(".gallery");

    data.forEach((element) => {
      let img = document.createElement("img");
      img.src = element.url;
      img.alt = element.title;
      img.classList.add("gallery_img");
      gallery.appendChild(img);
    });
  } catch (error) {
    throw error;
  }
};

(async () => {
  try {
    init();
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
})();
