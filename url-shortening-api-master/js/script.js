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
let url = document.getElementById("url");
let copySection = document.getElementById("copyText");
let mainParagraph = document.getElementById("mainLink");
let shortParagraph = document.getElementById("shortLink");
let button = document.getElementById("copyLink");

let submitForm = async (e, form) => {
  try {
    e.preventDefault();
    const myResponse = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url.value}`,
      {
        method: "post",
        body: JSON.stringify({
          name: form.formInput.value,
        }),
      }
    );
    const data = await myResponse.json();
    const link = data.result.short_link;
    copySection.style.display = "flex";
    mainParagraph.innerHTML = url.value;
    shortParagraph.innerHTML = link;
    // console.log(link);
    // display();
  } catch (error) {
    //Failure
    alert("Error");
  }
};

// fetch("https://api.shrtco.de/v2/shorten")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let copyButton = () => {
  // button.value = true;
  // // shortParagraph.select();
  // // shortParagraph.setSelectionRange(0, 99999);
  let range = document.createRange();
  let selection = window.getSelection();
  range.selectNodeContents(document.querySelector("#shortLink"));

  selection.removeAllRanges();
  selection.addRange(range);

  navigator.clipboard.writeText(shortParagraph.innerText).then(function () {
    console.log("text copied");
  });
  button.style.backgroundColor = "purple";
  button.innerHTML = "copied!";
  window.setTimeout(function () {
    url.value = "";
    button.style.backgroundColor = "hsl(180, 66%, 49%)";
    button.innerHTML = "copy";
  }, 3000);
};
