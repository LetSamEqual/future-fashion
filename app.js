// load function
window.onload = () => {
  clearInterval(checkImagesLoaded);
  const loader = document.querySelector(".loader");
  const loaderText = document.querySelector(".loader-text");
  const progressBar = document.querySelector(".progress-bar");
  const progressPercentage = document.querySelector(".progress-percentage");
  loader.style.height = "0vh";
  loader.style.opacity = "0";
  loaderText.innerText = "Loaded";
  progressBar.style.width = "60vw";
  progressPercentage.innerText = "100%";
  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.display = "block";
  }, 1000);
};

const checkImagesLoaded = setInterval(function () {
  const images = document.querySelectorAll("img");
  const progressBar = document.querySelector(".progress-bar");
  const progressPercentage = document.querySelector(".progress-percentage");
  let count = 0;
  images.forEach((el) => {
    if (el.naturalHeight > 0 && el.naturalWidth > 0) {
      count++;
    } else return;
  });
  const progress = count / images.length;
  console.log(progress);
  progressBar.style.width = `${50 * progress + 10}vw`;
  progressPercentage.innerText = `${Math.floor(progress * 100)}%`;
}, 2000);

// nav code

const search_icon = document.querySelector(".search-icon");

search_icon.addEventListener("mousedown", () => {
  const searchbar = document.querySelector(".searchbar");
  if (searchbar.style.display == "none") {
    searchbar.style.display = "inline-block";
    return;
  }
  searchbar.style.display = "none";
});

// parallax code

const parallax_el = document.querySelectorAll(".parallax");
const parallax_wrapper = document.querySelector(".parallax-wrapper");

let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.5;

    el.style.transform = `perspective(2300px) translateZ(${
      zValue * speedz
    }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${-yValue * speedy}px)) `;
  });
}
update(0);

parallax_wrapper.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});

const raindrop_pics = document.querySelectorAll(".parallax-raindrop");
const user_scroll_distance = document.querySelector(".second-section-wrapper");

const scrollRaindrops = () => {
  raindrop_pics.forEach((el) => {
    el.style.transform = `translateY(${
      el.getBoundingClientRect().top * -0.25
    }px)`;
  });
};

scrollRaindrops();

window.addEventListener("scroll", () => {
  scrollRaindrops();
});

// new products container code

const new_mens_product = document.querySelector(".new-mens-products");
const new_womens_product = document.querySelector(".new-womens-products");
const new_inspo_product = document.querySelector(".new-inspo-products");

const position_values = {
  base: {
    women: -20,
    mens: 37,
    inspo: 80,
  },
  hover: {
    women: -6,
    mens: 18,
    inspo: 36,
  },
  not_hover_women_men: {
    women: -37,
    mens: 85,
    inspo: 105,
  },
  not_hover_inspo: {
    women: -37,
    mens: 18,
  },
};

new_womens_product.addEventListener("mouseover", (e) => {
  e.target.style = `transform: translate(${position_values.hover.women}%)`;
  new_mens_product.style = `transform: translate(${position_values.not_hover_women_men.mens}%)`;
  new_inspo_product.style = `transform: translate(${position_values.not_hover_women_men.inspo}%)`;
});

new_womens_product.addEventListener("mouseleave", (e) => {
  e.target.style = `transform: translate(${position_values.base.women}%)`;
  new_mens_product.style = `transform: translate(${position_values.base.mens}%)`;
  new_inspo_product.style = `transform: translate(${position_values.base.inspo}%)`;
});

new_mens_product.addEventListener("mouseover", (e) => {
  e.target.style = `transform: translate(${position_values.hover.mens}%)`;
  new_womens_product.style = `transform: translate(${position_values.not_hover_women_men.women}%)`;
  new_inspo_product.style = `transform: translate(${position_values.not_hover_women_men.inspo}%)`;
});

new_mens_product.addEventListener("mouseleave", (e) => {
  e.target.style = `transform: translate(${position_values.base.mens}%)`;
  new_womens_product.style = `transform: translate(${position_values.base.women}%)`;
  new_inspo_product.style = `transform: translate(${position_values.base.inspo}%)`;
});

new_inspo_product.addEventListener("mouseover", (e) => {
  e.target.style = `transform: translate(${position_values.hover.inspo}%)`;
  new_mens_product.style = `transform: translate(${position_values.not_hover_inspo.mens}%)`;
  new_womens_product.style = `transform: translate(${position_values.not_hover_inspo.women}%)`;
});

new_inspo_product.addEventListener("mouseleave", (e) => {
  e.target.style = `transform: translate(${position_values.base.inspo}%)`;
  new_mens_product.style = `transform: translate(${position_values.base.mens}%)`;
  new_womens_product.style = `transform: translate(${position_values.base.women}%)`;
});

const spotlight_product_carousel = document.querySelector(
  ".spotlight-product-carousel"
);

const products = [
  {
    id: "product-1",
    name: "FF-380s",
    price: "$400",
    imgURL: "./assets/products/featured/colourful-kicks.jpg",
    alt: "colourful sneakers resting against a podium",
  },
  {
    id: "product-2",
    name: "Winter Ripcord",
    price: "$300",
    imgURL: "./assets/products/featured/raincoat.jpg",
    alt: "raincoat with white hood, dark grey body and yellow lining",
  },
  {
    id: "product 3",
    name: "Kafka Shades",
    price: "$150",
    imgURL: "./assets/products/featured/sunglasses.jpg",
    alt: "round black sunglasses on pink background",
  },
  {
    id: "product-4",
    name: "FF-520s",
    price: "$380",
    imgURL: "./assets/products/featured/white-kicks.jpg",
    alt: "black and white hi-top sneakers",
  },
  {
    id: "product-5",
    name: "Daylite tracksuit",
    price: "$280",
    imgURL: "./assets/products/featured/yellow-tracksuit.jpg",
    alt: "woman in a bright yellow tracksuit standing on a basketball court",
  },
];

const pushToParent = (childArray) => {
  let html_to_insert = "";
  childArray.forEach((child) => {
    html_to_insert += `<div class="spotlight-product-tile" id=${child.id}>
    <img class="spotlight-product-image" src=${child.imgURL} alt=${child.alt}/>
    <h2>${child.name}</h2>
    <p>${child.price}</p>
    </div>`;
  });
  spotlight_product_carousel.innerHTML = html_to_insert;
};

pushToParent(products);

const rightButton = () => {
  const num_carousel_tiles = document.querySelectorAll(
    ".spotlight-product-tile"
  ).length;

  const product_carousel_position = Number(
    window.getComputedStyle(spotlight_product_carousel).right.slice(0, -2)
  );
  const new_product_carousel_position =
    product_carousel_position +
    spotlight_product_carousel.scrollWidth / num_carousel_tiles;
  if (
    product_carousel_position + window.innerWidth >=
    spotlight_product_carousel.scrollWidth
  ) {
    return;
  }

  if (
    new_product_carousel_position + window.innerWidth >=
    spotlight_product_carousel.scrollWidth
  ) {
    const right_button_element = document.getElementById("rightButton");
    right_button_element.style.color = "rgba(255, 255, 255, 0.626)";
    right_button_element.style.cursor = "default";
  }
  const left_button_element = document.getElementById("leftButton");
  left_button_element.style.color = "white";
  left_button_element.style.cursor = "pointer";

  spotlight_product_carousel.style.right = `${new_product_carousel_position}px`;
};

const leftButton = () => {
  const num_carousel_tiles = document.querySelectorAll(
    ".spotlight-product-tile"
  ).length;
  const product_carousel_position = Number(
    window.getComputedStyle(spotlight_product_carousel).right.slice(0, -2)
  );
  const new_product_carousel_position =
    product_carousel_position -
    spotlight_product_carousel.scrollWidth / num_carousel_tiles;

  if (new_product_carousel_position < 0) {
    return;
  }

  if (new_product_carousel_position == 0) {
    const left_button_element = document.getElementById("leftButton");
    left_button_element.style.color = "rgba(255, 255, 255, 0.626)";
    left_button_element.style.cursor = "default";
  }
  const right_button_element = document.getElementById("rightButton");
  right_button_element.style.color = "white";
  right_button_element.style.cursor = "pointer";

  spotlight_product_carousel.style.right = `${new_product_carousel_position}px`;
};
