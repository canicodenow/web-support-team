$(document).ready(function() {
  $('.header').height($(window).height());
});

const myForm = document.getElementById('contactForm');
function resetForm() {
  myForm.reset();
}
console.log(myForm);
