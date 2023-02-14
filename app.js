$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
        name: "required",
        message: "required",
        email: {
            required: true,
            email: true
    }
  }
})});

function button1listener(){
  document.getElementById("image").src="resources/rpk.jpg";
}
function button2listener(){
  document.getElementById("image").src="resources/fennec.jpg";
}
function button3listener(){
  document.getElementById("image").src="resources/taqv.jpg";
}