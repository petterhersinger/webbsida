$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
        name: "required",
        message: "required",
        email: {
            required: true,
            email: true
    },
    messages: {
      name: "Please enter your name: <br>",
      message: "You need to send a message to Ghost<br>",
      email: {
        required: "Please enter your email adress<br>",
        email: "Please enter a valid email adress<br>"

        }
      }
    }
  });
});
$(document).ready(function () {
  $("#print-link").click(function() {
    window.print();
  });
});

function button1listener(){
  document.getElementById("image").src="resources/rpk.jpg";
}
function button2listener(){
  document.getElementById("image").src="resources/fennec.jpg";
}
function button3listener(){
  document.getElementById("image").src="resources/taqv.jpg";
}