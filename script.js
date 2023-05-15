"use strict";

const themeButton = document.querySelector(".theme-icon");
const link = document.querySelector("link[href='style.css']");

const changeTheme = () => {
  if (link.getAttribute("href") == "style.css") {
    link.setAttribute("href", "night-mode.css");
  } else {
    link.setAttribute("href", "style.css");
  }
};
themeButton.addEventListener("click", changeTheme);
themeButton.addEventListener("touchstart", changeTheme);

const cv = document.querySelector(".cv");

const downloadCV = () => {
  const fileUrl = "./MyCV.pdf";
  const fileName = "MyCv.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.click();
};
cv.addEventListener("click", downloadCV);
cv.addEventListener("touchstart", downloadCV);

const contact = document.querySelector(".contact");

const sendMail = () => {
  const emailAddress = "wselimzade@mail.ru";
  const emailSubject = "Portfolio Mail";
  const emailBody = "Jobs";
  window.location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
};
contact.addEventListener("click", sendMail);
contact.addEventListener("touchstart", sendMail);
