var link=document.querySelector(".search-btn");
var popup=document.querySelector(".form");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.toggle("form-show");
}) ;
