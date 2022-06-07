const ImageLoaderWorker = new Worker("/public/js/web workers/loadImg.js");
const imgElements = document.querySelectorAll("div[data-src]");

imgElements.forEach((imageElement) => {
  const imageURL = imageElement.getAttribute("data-src");
  ImageLoaderWorker.postMessage(imageURL);
});

ImageLoaderWorker.addEventListener("message", (event) => {
  const imageData = event.data;
  const imageElement = document.querySelector(
    `div[data-src='${imageData.imageURL}']`
  );
  const objectURL = URL.createObjectURL(imageData.blob);

  imageElement.style.backgroundImage = "url(" + objectURL + ")";
  imageElement.removeAttribute("data-src");
});
