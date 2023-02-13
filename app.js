$("#contact-form").validate({
    rules: {
        fname: "required",
        lname: "required",
        email: {
            required: true,
            email: true
  }}});

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const image = document.getElementById("image");

button1.addEventListener("click", function () {
  image.src = 'resources/rpk.jpg';
});

button2.addEventListener("click", function () {
  image.src = 'resources/taqv.jpg';
});

button3.addEventListener("click", function () {
  image.src = 'resources/fennec.jpg';
});