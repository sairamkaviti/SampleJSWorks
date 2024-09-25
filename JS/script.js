let fetchData = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let jsonData = await response.json();

  jsonData.map((ele) => {
    if (ele.id >= 15) {
      let trendingimg = document.createElement("img");
      trendingimg.setAttribute("id", ele.id);
      let headingTitle = document.createElement("h5");
      headingTitle.setAttribute("id", ele.id);
      let price = document.createElement("h4");
      price.setAttribute("id", ele.id);
      price.classList.add("priceProduct");
      price.innerHTML =
        "From" +
        " " +
        '<i class="fa-solid fa-indian-rupee-sign"></i>' +
        ele.price * 1000;
      let productDiv = document.createElement("div");
      productDiv.setAttribute("id", ele.id);

      productDiv.classList.add("products");

      trendingimg.src = ele.image;
      trendingimg.classList.add("imagesFake");
      headingTitle.innerHTML = ele.title;
      headingTitle.classList.add("haedingTitle");
      headingTitle.innerHTML = ele.title.slice(0, 40) + "...";
      productDiv.appendChild(trendingimg);
      productDiv.appendChild(headingTitle);
      productDiv.appendChild(price);
      let bestClothes = document.getElementById("bestClothes");
      bestClothes.append(productDiv);

      productDiv.addEventListener("click", (e) => {
        var productId = e.target.id;
        console.log(productId);
        window.location.href = `productData.html?dataId=${productId}`;
      });
    }
  });
  jsonData.map((ele) => {
    if (ele.id >= 9 && ele.id < 15) {
      let trendingimg = document.createElement("img");
      let headingTitle = document.createElement("h5");
      let productDiv = document.createElement("div");
      let price = document.createElement("h4");
      price.classList.add("priceProduct");
      price.innerHTML =
        "From" +
        " " +
        '<i class="fa-solid fa-indian-rupee-sign"></i>' +
        ele.price * 100;
      productDiv.classList.add("products");

      trendingimg.src = ele.image;
      trendingimg.classList.add("imagesFake");
      headingTitle.innerHTML = ele.title.slice(0, 35) + "...";

      headingTitle.classList.add("haedingTitle");
      productDiv.appendChild(trendingimg);
      productDiv.appendChild(headingTitle);
      productDiv.appendChild(price);
      let bestElectronics = document.getElementById("bestElectronics");
      bestElectronics.appendChild(productDiv);
    }
  });
};
fetchData();

function searchLogoHideShow() {
  let searchId = document.getElementById("searchId");
  let searchLogo = document.getElementById("searchLogo");
  searchId.addEventListener("input", () => {
    if (searchId.value.length > 0) {
      searchLogo.style.display = "none";
    } else {
      searchLogo.style.display = "block";
    }
  });
}
searchLogoHideShow();

let currentIndex = 0;

let slide = document.querySelector(".caroselSlide");
let images = document.querySelectorAll(".caroselSlide img");
let totalImages = images.length;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  slide.style.transform = `translateX(${-currentIndex * 1249}px)`;
}
setInterval(() => {
  moveSlide(1);
}, 3500);
