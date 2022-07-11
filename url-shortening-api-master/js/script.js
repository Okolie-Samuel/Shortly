const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".separatedMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// fetch api;
url = document.getElementById("url");

let submitForm = (e, form) => {
  e.preventDefault();
  fetch(`https://api.shrtco.de/v2/shorten?url=${url.value}`, {
    method: "post",
    body: JSON.stringify({
      name: form.formInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) =>
      //Success code goes here
      console.log(data)
    )
    .catch(function (err) {
      //Failure
      alert("Error");
    });
};

// fetch("https://api.shrtco.de/v2/shorten")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let copySection = document.getElementById("copyText");
let mainParagraph = document.getElementById("mainLink");
let shortParagraph = document.getElementById("shortLink");
let button = document.getElementById("copyLink");
let data = data.json();

let display = () => {
  copySection.style.display = "initial";
  mainParagraph.innerHTML = url.value;
  shortParagraph.innerHTML = data.result.short_link;
};
