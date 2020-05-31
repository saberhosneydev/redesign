function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function documentReady() {
	if (getCookie("showDisclaimer") == "") {
		let date = new Date(Date.now() + 86400e3);
		date = date.toUTCString();
		document.cookie = `showDisclaimer=false; expires=${date}`;
	} else {
		document.getElementById("disclaimer").style.display = "none";
	}
}

function closeDisclaimer() {
	event.preventDefault();
	document.getElementById("disclaimer").className += " close";
}
