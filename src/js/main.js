import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.name;

const heroImage = document.querySelector("#hero-image");
heroImage.src = parkData.images[0].url;

const heroBannerSubcontent = document.querySelector(".hero-banner-subcontent");
heroBannerSubcontent.innerHTML = parkInfoTemplate(parkData);

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}