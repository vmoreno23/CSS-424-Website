function toggleElement(){
	var PhotoGallery = document.getElementById("toggleSection");
	var button = document.getElementById("toggleButton");
	
	// Check the current state of section
	if (PhotoGallery.style.display === "none" || PhotoGallery.style.display === "") {
		
		// if it's hidden, show it
		PhotoGallery.style.display = "block";
		button.classList.add("active");
		button.classList.remove("inactive");
		
	} else {
		
		// if it's visible, hide it
		PhotoGallery.style.display = "none";
		button.classList.remove("active");
		button.classList.add("inactive");
	}
}