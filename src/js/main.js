import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
getHeaderInfo(parkData);

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

function getHeaderInfo(data){
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.title = data.name;

  const heroImage = document.querySelector("#hero-image");
  heroImage.src = data.images[0].url;

  const heroBannerSubcontent = document.querySelector(".hero-banner-subcontent");
  heroBannerSubcontent.innerHTML = parkInfoTemplate(data);
}