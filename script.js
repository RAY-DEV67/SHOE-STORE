// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //   captionText.innerHTML = dots[slideIndex - 1].alt;
}

//   Add to cart quantity/////////////////////

const carttext = document.querySelector(".carttext");
const basketcart = document.querySelector(".basketcart");
const addCart = document.querySelector(".plus");
const removeCart = document.querySelector(".minus");

carttext.textContent = 0;
basketcart.textContent = 0;
addCart.addEventListener("click", function () {
  carttext.textContent++;
});

//   remove from cart quantity/////////////////////

removeCart.addEventListener("click", function () {
  if (carttext.textContent > 0) {
    carttext.textContent--;
  }
});

// UPDATE CART///////////////////
const addToCartBtn = document.querySelector(".addtocart");
const cartContainer = document.querySelector(".cart");
const postEmptyCart = document.querySelector(".postemptycart");
const newPrice1 = document.querySelector(".newprice1");

const createCart = [];

addToCartBtn.addEventListener("click", function () {
  $(".emptycart").remove();
  postEmptyCart.classList.add("hidden");

  if (carttext.textContent > 0) {
    const cartProducts = {
      name: "Fall Limited Edition Sneakers",
      price: "$" + newPrice1.textContent,
      quantity: carttext.textContent,
    };

    const renderCart = function () {
      const html = `
    <div class="cartdetails">
              <img class="shoecartdetails" src="images/image-product-1-thumbnail.jpg" alt="thumbnail">
             <section class="cartdescription">
              <p class="cartname">${cartProducts.name}</p>
              <p class="anytext">${cartProducts.price} x ${
        cartProducts.quantity
      } <span class="total"> ${
        "$" +
        document.querySelector(".newprice1").textContent *
          cartProducts.quantity +
        ".00"
      }</span></p>
             </section>
         
            </div>
    `;
      cartContainer.insertAdjacentHTML("beforeend", html);
    };
    basketcart.textContent = carttext.textContent;

    createCart.push(cartProducts);
    renderCart();
  }

  if (createCart.length >= 1) {
    addToCartBtn.disabled = true;
  }
  if ((addToCartBtn.disabled = true)) {
    addToCartBtn.style.backgroundColor = "gray";
  }

  carttext.textContent = 0;
});

// OPEN CART///////////////////
const cartModal = document.querySelector(".cartmodal");
const emptyCart = document.querySelector(".emptycart");
const cart = document.querySelector(".cart");

cartModal.addEventListener("click", function () {
    $(".cart").fadeToggle("slow","linear")
  if (createCart.length == 0) {
    emptyCart.classList.remove("hidden");
  }
});

// CLEAR CART////////////////

const deleteCart = document.querySelector(".cartcheckout");
deleteCart.addEventListener("click", function () {
  if (createCart.length > 0) {
    postEmptyCart.classList.remove("hidden");
    $(".cartdetails").remove();
    basketcart.textContent = 0;
    addToCartBtn.removeAttribute("disabled");
    addToCartBtn.style.backgroundColor = "hsl(26, 100%, 55%)";
  }
});

// MOBILE MENU ////////////
const ham = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobilemenubg");
const closeMobileMenu = document.querySelector(".closemobilemenu");

ham.addEventListener("click", function () {
    mobileMenu.style.transform = "translateX(0)";
  mobileMenu.style.backgroundColor = "hsla(0, 0%, 0%, 75%)"
});
closeMobileMenu.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(-100%)";
});
