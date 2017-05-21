function showDiv() {
    div = document.getElementById('team-display');
		title = document.getElementById('team-button');
		if (div.style.display == "block") {
			div.style.display = "none";
			title.innerHTML = "Show";
		}
		else {
			div.style.display = "block";
			title.innerHTML = "Hide";
		}
}
