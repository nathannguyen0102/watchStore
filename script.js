const btn = document.querySelectorAll(".product-btn");
const cart = document.querySelector(".cart");
const closeBtn = document.querySelector(".checkout-btn");
const openBtn = document.querySelector(".cart-open");
const searchBtn = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const header = document.querySelector("header");
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const userModal = document.querySelector(".user-modal");
const openMenu = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#navclose-btn");
const nav = document.querySelector(".nav");

console.log(cart);
// console.log(btn);

// Cart function//////////////////////////////////////////////////////////////////////////////////////
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    const btnItem = event.target;
    const product = btnItem.parentElement;
    const productImg = product.querySelector("img").src;
    const productName = product.querySelector(".product-name").innerText;
    const productPrice = product.querySelector(".product-price").innerText;
    console.log(productPrice, productImg, productName);
    cart.classList.add("active");
    addCart(productPrice, productImg, productName);
  });
});

function addCart(productPrice, productImg, productName) {
  const addtr = document.createElement("tr");
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const productT = document.querySelectorAll(".title");
    if (productT[i].innerHTML == productName) {
      alert("item is already added to cart");
      return;
    }
  }
  console.log(cartItem.length);
  const trcontent =
    '<tr><td><img src="' +
    productImg +
    '"/><p><span class="title">' +
    productName +
    "</span></p></td><td><p class='tbody-price'>" +
    productPrice +
    '</p></td><td><input type="number" value="1" min="1" /></td><td><span class="delete-btn">Delete<span></td></tr>';
  addtr.innerHTML = trcontent;
  const cartTable = document.querySelector("tbody");
  cartTable.append(addtr);
  cartTotal();
  deleteCard();
}

///total//////////////////////////////////////////////////////////

function cartTotal() {
  const cartItem = document.querySelectorAll("tbody tr");
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    const inputValue = cartItem[i].querySelector("input").value;

    const tbodyPrice = cartItem[i].querySelector(".tbody-price").innerHTML;

    cal = parseInt(inputValue * tbodyPrice);
    total += cal;
  }
  document.querySelector(".price-total-display").textContent =
    "Total: " + total + "$";
  inputChange();
}

// delete//////////////////////////////////////////////////////////
function deleteCard() {
  const cartItem = document.querySelectorAll("tbody tr");

  for (let i = 0; i < cartItem.length; i++) {
    const dele = document.querySelectorAll(".delete-btn");
    dele[i].addEventListener("click", function (e) {
      const cartDelete = e.target;
      const cartItemD = cartDelete.parentElement.parentElement;
      cartItemD.remove();
      cartTotal();
    });
  }
}

// change input ////////////////////////////////////////////////////////
function inputChange() {
  const cartItem = document.querySelectorAll("tbody tr");
  for (let i = 0; i < cartItem.length; i++) {
    const inputValue = cartItem[i].querySelector("input");
    inputValue.addEventListener("change", function () {
      cartTotal();
    });
  }
}

//open and close cart////////////////////////////////////////////////////////
closeBtn.addEventListener("click", function () {
  cart.classList.remove("active");
});
openBtn.addEventListener("click", function () {
  cart.classList.add("active");
});

// search toggle////////////////////////////////////////////////////////
searchBtn.addEventListener("click", function () {
  search.classList.toggle("active");
});

// Sticky nav///////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// hidden menu when srolling////////////////////////////////////////////////////
window.onscroll = () => {
  search.classList.remove("active");
};

// smooth scroll roll//////////////////////////////////////////////////////
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    nav.classList.remove("nav-active");
  }
});

// open and close modal///////////////////////////////////////////////////////

modalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

modalClose.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

userModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// open close menu //////////////////////////////////////////////////////////////
openMenu.addEventListener("click", function () {
  nav.classList.add("nav-active");
});

closeMenu.addEventListener("click", function () {
  nav.classList.remove("nav-active");
});
