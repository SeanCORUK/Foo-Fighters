/** LIGHTBOX **/
document.querySelectorAll("[data-external-link]").forEach((link) => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const lightbox = document.getElementById("lightbox");
    const iframe = document.getElementById("lightbox-iframe");
    iframe.src = href;
    lightbox.style.display = "flex";
  });
});

document
  .querySelector("#lightbox .close-btn")
  .addEventListener("click", function() {
    const lightbox = document.getElementById("lightbox");
    const iframe = document.getElementById("lightbox-iframe");
    iframe.src = "";
    lightbox.style.display = "none";
  });

/* Get Browser */
document.addEventListener("DOMContentLoaded", function() {
  let browser = "unknown";

  if (
    navigator.userAgent.indexOf("Chrome") !== -1 &&
    navigator.userAgent.indexOf("Edg") === -1
  ) {
    browser = "browser--chrome";
  } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    browser = "browser--firefox";
  } else if (
    navigator.userAgent.indexOf("Safari") !== -1 &&
    navigator.userAgent.indexOf("Chrome") === -1
  ) {
    browser = "browser--safari";
  } else if (navigator.userAgent.indexOf("Edg") !== -1) {
    browser = "browser--edge";
  } else if (
    navigator.userAgent.indexOf("Opera") !== -1 ||
    navigator.userAgent.indexOf("OPR") !== -1
  ) {
    browser = "browser--opera";
  } else if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    navigator.userAgent.indexOf("Trident") !== -1
  ) {
    browser = "browser--ie";
  }

  document.body.classList.add(browser);
});

/* Hide empty blocks */
document.addEventListener("DOMContentLoaded", function() {
  const selectors = [".shopify-block", ".social-icons__wrapper"];

  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      if (!el.innerHTML.trim()) {
        el.style.display = "none";
      }
    });
  });
});