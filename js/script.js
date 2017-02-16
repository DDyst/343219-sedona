var popup = document.querySelector(".modal-content");
var btn = document.querySelector(".search-btn");
var form = popup.querySelector(".search-form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

popup.classList.add("modal-content-hide");
btn.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-show");
	if (popup.classList.contains("modal-error")) {
		popup.classList.remove("modal-error");
	}
});
form.addEventListener("submit", function(event) {
	if (!arrival.value && !departure.value && !adults.value && !children.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});

function initMap() {
	var mapCanvas = document.querySelector(".map");
	var mapOptions = {
		center: new google.maps.LatLng(34.7596661,-111.7369922),
		zoom: 9,
		disableDefaultUI: true
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(34.8697361,-111.7609922),
		map: map
	});
}
google.maps.event.addDomListener(window, "load", initMap);