let cardImg = document.querySelector(".card-img");
let cardDesc = document.querySelector(".card-description");

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=nBRunf0QxhZc3mWLfp1cy4EZ4O8XbkVU0KhWtRv7"
)
  .then((res) => res.json())
  .then((data) => {
    let desc = `
    <h1 class="card-author">Autore:${data.copyright}</h1>`;

    let img = `<a href="${data.hdurl}" target="_blank"><img class="iotd" src="${data.hdurl}" alt=""></img></a>
    <p class="imgdesc" >${data.explanation}</p>`;

    cardDesc.innerHTML = desc;
    cardImg.innerHTML = img;
  });
