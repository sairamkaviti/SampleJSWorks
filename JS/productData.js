
      async function loadProduct() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get("dataId");

        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const jsonData = await response.json();
          console.log(jsonData);
          const product = jsonData.find((item) => item.id == productId);

          if (product) {
            // console.log(jsonData);

            console.log(product);

            let rcvdProCon = document.getElementById("rcvdProCon");
            let title = document.getElementById("title");
            let rating = document.getElementById("rating");
            let reviews = document.getElementById("reviews");
            let extraOff = document.getElementById("extraOff");
            let productPrice = document.getElementById("productPrice");
            let priceOffer = document.getElementById("priceOffer");
            let description = document.getElementById("description");
            let availOffer = document.getElementById("availOffer");
            let firstSplOfr = document.getElementById("firstSplOfr");
            let secondSplOfr = document.getElementById("secondSplOfr");
            let thirdSplOfr = document.getElementById("thirdSplOfr");
            let productPriceStrike =
              document.getElementById("productPriceStrike");

            let img = document.getElementById("image");
            let wishListLogoDiv = document.getElementById("wishListLogoDiv");

            let wishLogo = document.createElement("div");
            wishLogo.setAttribute("id", "wishLogo");
            wishLogo.innerHTML = ' <i class="fa-solid fa-heart"></i> ';
            wishListLogoDiv.appendChild(wishLogo);
            wishLogo.classList.add("wishLogo");
            wishLogo.setAttribute("title", "click to add wishlist");

            // $('#wishLogo').click(function() {
            //       $('#myElement').toggle();
            //   });

            wishLogo.addEventListener("click", () => {
              wishLogo.style.color = "purple";
              let toastDiv = document.getElementById("toastDiv");
              let sucMsg =
                '<i class="fa-solid fa-circle-check"></i> Succeesfully one item added your wishlist';
              let toast = document.createElement("div");
              toast.innerHTML = sucMsg;
              toastDiv.appendChild(toast);
              toast.classList.add("toastCont");
              setTimeout(() => {
                toast.remove();
              }, 5000);
            });

            title.innerHTML = product.title;
            rating.innerHTML =
              product.rating.rate + '<i class="fa-solid fa-star"></i>';

            let randomReview = Math.floor(Math.random() * 100);
            reviews.innerHTML =
              product.rating.count +
              " " +
              "Ratings" +
              " & " +
              randomReview +
              " " +
              "Reviews";

            let randomOffer = Math.floor(Math.random() * 1000);
            extraOff.innerHTML =
              "Extra" +
              " " +
              '<i class="fa-solid fa-indian-rupee-sign"></i>' +
              randomOffer +
              " " +
              "off";

            productPriceStrike.innerHTML =
              '<i class="fa-solid fa-indian-rupee-sign"></i>' +
              product.price * 1000;

            let price = product.price * 10;

            let originalPrice = (
              product.price * 1000 -
              price * randomReview
            ).toFixed(2);
            productPrice.innerHTML =
              '<i class="fa-solid fa-indian-rupee-sign"></i>' + originalPrice;
            priceOffer.innerHTML = randomReview + "%" + " " + "off";
            console.log(randomReview);

            description.innerHTML =
              "<strong>Product Description : </strong>" +
              product.description.slice(0, 300);

            availOffer.innerHTML = "Available offers";
            firstSplOfr.innerHTML =
              '<i class="fa-solid fa-tag"></i>' +
              " " +
              "<strong>Special Price </strong>" +
              extraOff.innerHTML +
              "(price inclusive of discount)";
            secondSplOfr.innerHTML =
              '<i class="fa-solid fa-tag"></i>' +
              " " +
              "<strong>Bank Offer</strong> Extra ₹250 off on HDFC Bank Pixel Credit Card Transactions. Min Txn Value: ₹5,000";
            thirdSplOfr.innerHTML =
              '<i class="fa-solid fa-tag"></i>' +
              " " +
              "<strong>Bank Offer</strong> Bank Offer Extra ₹500 off on HDFC Bank Pixel Credit Card EMI Transactions. Min Txn Value: ₹5,000";

            img.src = product.image;
            img.setAttribute("title", product.title);
            img.classList.add("proImage");

            let addToCartBtn = document.createElement("button");
            addToCartBtn.innerHTML =
              '<i class="fa-solid fa-cart-shopping cartAdd"></i>' +
              " " +
              "Add To Cart";
            let buyNow = document.createElement("button");
            buyNow.innerHTML =
              '<i class="fa-solid fa-forward"></i>' + " " + "Buy Now ";
            let btnsDiv = document.createElement("div");
            btnsDiv.appendChild(addToCartBtn);
            addToCartBtn.classList.add("addToCartProduct", "addBuy");
            buyNow.classList.add("buyNowProduct", "addBuy");
            btnsDiv.appendChild(buyNow);
            btnsDiv.classList.add("btnsDivAddBuy");
            rcvdProCon.append(btnsDiv);
            addToCartBtn.setAttribute("id", product.id);

            addToCartBtn.addEventListener("click", (e) => {
              let productId = e.target.id;

              console.log(productId);

              //------add to cart logic starts----//
              let cart = localStorage.getItem("cartLSKey");

              console.log(cart);
              if (cart == null) {
                cart = [];
                console.log("this is empty");
              } else {
                cart = JSON.parse(cart);
              }
              if (!cart.includes(productId)) {
                cart.push(productId);
                console.log("Added product to cart:", productId);
              } else {
                console.log("Product already in cart");
              }

              localStorage.setItem("cartLSKey", JSON.stringify(cart));
            

              console.log("Cart updated:", cart);
               let cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerHTML = cart.length;  
    }
window.onload();
              
            });
          } else {
            document.getElementById("jsonData").textContent =
              "Product not found";
          }
        } catch (error) {
          console.error("Error loading product:", error);
        }
      }

      window.onload = loadProduct();
      window.onload = () => {
        let cartCount = document.getElementById("cartCount");
        let getCount = localStorage.getItem("cartLSKey");

        if (getCount !== null) {
          let cartArray = JSON.parse(getCount);
          function removeDups(arr) {
            let result = [...new Set(arr)];
            return result;
          }
          removeDups(cartArray);

          cartCount.innerHTML = cartArray.length;
          cartCount.style.display = "block";
        } else {
          cartCount.innerHTML = 0;
          cartCount.style.display = "none";
        }
      };
