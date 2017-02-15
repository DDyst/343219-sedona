var popup = document.querySelector(".modal-content");
var openBtn = document.querySelector(".search-btn");
var formBtn = popup.querySelector(".search-form-btn");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var map = document.querySelector(".map iframe");
var mapImage = document.querySelector(".map img");

popup.classList.add("modal-content-hide");
openBtn.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-show");
	if (popup.classList.contains("modal-error")) {
		popup.classList.remove("modal-error");
	}
});
formBtn.addEventListener("click", function(event) {
	if (!(arrival.value && departure.value && adults.value && children.value)) {
		event.preventDefault();
		popup.classList.add("modal-error");
	}
});
mapImage.classList.add("modal-content-hide");
map.classList.remove("modal-content-hide");