const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim(); // trims if any spaces in input value and assign to qrValue
  // if the qrValue is empty or preValue is already equal to qrValue then return the function
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue; // if not set the preValue as qrValue
  generateBtn.innerText = "Generating QR Code..."; // change button text
  //gets qrcode for the input value using qrserver api & displays the image as output
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});
