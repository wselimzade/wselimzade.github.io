"use strict";

// change theme dark & night
const themeButton = document.querySelector(".theme");
const link = document.querySelector("link[href='css/night-mode.css']");
const nightLink = "css/style.css";
const lightLink = "css/night-mode.css";
const changeTheme = () => {
  if (link.getAttribute("href") == nightLink) {
    link.setAttribute("href", lightLink);
  } else {
    link.setAttribute("href", nightLink);
  }
};
themeButton.addEventListener("click", changeTheme);

// contact to me
const contact = document.querySelector(".contact");
const sendMail = () => {
  const emailAddress = "i_selimzade@mail.ru";
  const emailSubject = "Portfolio Mail";
  const emailBody = "Replace this text with the desired email body content";
  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);
  window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
};
contact.addEventListener("click", sendMail);

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
  window.open("https://wselimzade.github.io/catchGame/", "_blank");
};
catchGame.addEventListener("click", catchGameLink);

// firstWebsiteProject link
const firstWebSite = document.querySelector("#firstWebsiteProject");
const firstWebSiteLink = () => {
  window.open("https://wselimzade.github.io/first-website-project/", "_blank");
};
firstWebSite.addEventListener("click", firstWebSiteLink);

// calculator link
const calculator = document.querySelector("#calculator");
const calculatorLink = () => {
  window.open("https://wselimzade.github.io/calculator/", "_blank");
};
calculator.addEventListener("click", calculatorLink);

// WeatherApp link
const weatherApp = document.querySelector("#WeatherApp");
const weatherAppLink = () => {
  window.open("https://wselimzade.github.io/WeatherApp/", "_blank");
};
weatherApp.addEventListener("click", weatherAppLink);

// myTasks link
const myTasks = document.querySelector('#myTasks');
const myTasksLink = () => {
  window.open("https://wselimzade.github.io/myTasks/", "_blank");
};
myTasks.addEventListener("click", myTasksLink)
