"use strict";

// change theme dark & night
const themeButton = document.querySelector(".theme-icon");
const link = document.querySelector("link[href='css/style.css']");
const changeTheme = () => {
  if (link.getAttribute("href") == "css/style.css") {
    link.setAttribute("href", "css/night-mode.css");
  } else {
    link.setAttribute("href", "css/style.css");
  }
};
themeButton.addEventListener("click", changeTheme);
themeButton.addEventListener("touchstart", changeTheme);

// contact to me
const contact = document.querySelector(".contact");
const sendMail = () => {
  const emailAddress = "wselimzade@mail.ru";
  const emailSubject = "Portfolio Mail";
  const emailBody = "Replace this text with the desired email body content";
  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);
  window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
};
contact.addEventListener("click", sendMail);
contact.addEventListener("touchstart", sendMail);

// change portfolio and skills section
const skills = document.querySelector(".skills");
const mySkills = document.querySelector(".my-skills");
const portfolio = document.querySelector(".portfolio");
const projects = document.querySelector(".projects");
const openSkills = () => {
  projects.style.display = "none";
  mySkills.style.display = "block";
  portfolio.classList.remove("active");
  skills.classList.add("active");
};
const openProjects = () => {
  projects.style.display = "block";
  mySkills.style.display = "none";
  portfolio.classList.add("active");
  skills.classList.remove("active");
};
skills.addEventListener("click", openSkills);
portfolio.addEventListener("click", openProjects);

// catchGame link
const catchGame = document.querySelector("#catchGame");
const catchGameLink = () => {
  window.location.href = "https://wselimzade.github.io/catchGame/";
};
catchGame.addEventListener("click", catchGameLink);

// firstWebsiteProject link
const firstWebSite = document.querySelector("#catchGame");
const firstWebSiteLink = () => {
  window.location.href = "https://wselimzade.github.io/first-website-project/";
};
firstWebSite.addEventListener("click", catchGameLink);
