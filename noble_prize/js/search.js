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
function searchNobel() {
	event.preventDefault();
	let container = document.getElementById("resultsContainer");
	let searchInput = document.getElementById("search");
	if (searchInput.value == "") {
		container.innerHTML = `
        <div
					style="
						text-align: center;
						margin-top: 150px;
						margin-bottom: 250px;
						color: #cea152;
					"
				>
					<h3>Search for the greatest humans in history!</h3>
				</div>
        `;
	} else {
		container.innerHTML = `<div class="search-results" id="searchResults"></div>`;
		let searchResults = document.getElementById("searchResults");
		fetch("/js/prize.json", { method: "GET" }).then(
			function (response) {
				response
					.text()
					.then(function (res) {
						let data = JSON.parse(res)["laureates"];
						data.forEach((item) => {
							if (item.hasOwnProperty("fullName")) {
								if (
									item["fullName"]["en"].includes(
										searchInput.value
									)
								) {
									console.log(item);
									searchResults.innerHTML += `
                        <div>
						<p>
							<i class="gg-profile"></i>
							<span class="person_title"
								>${item["fullName"]["en"]} - ${item["nobelPrizes"][0]["awardYear"]}</span
							>
						</p>
						<p>
							<i class="gg-time"></i>
							<span class="person_birth"
                                >${
									item.hasOwnProperty("death")
										? "(" +
										  item["birth"]["date"].substring(
												0,
												4
										  ) +
										  " - " +
										  item["death"]["date"].substring(
												0,
												4
										  ) +
										  ")"
										: item["birth"]["date"].substring(0, 4)
								} ― ${
										item["birth"]["place"][
											"locationString"
										]["en"]
									}</span
							>
						</p>
						<p>
							The reward was given
							<span class="award_motivation"
								>${item["nobelPrizes"][0]["motivation"]["en"]}.</span
							>
							<span class="award_category"
								> - ${item["nobelPrizes"][0]["categoryFullName"]["en"]}.</span
							>
						</p>
						<hr />
                    </div>
        `;
								}
							}
						});
					})
					.catch(function (error) {
						console.log(error);
					});
			},
			function (error) {
				console.log(error);
			}
		);
	}
}
//wow
/*
<div class="search-results" id="searchResults">		
<div>
						<p>
							<i class="gg-profile"></i>
							<span class="person_title"
								>A. Michael Spence - 2001</span
							>
						</p>
						<p>
							<i class="gg-time"></i>
							<span class="person_birth"
								>1943 Montclair, NJ, USA</span
							>
						</p>
						<p>
							The reward was given
							<span class="award_motivation"
								>for their analyses of markets with asymmetric
								information.</span
							>
							<span class="award_category"
								>Economic Sciences</span
							>
						</p>
						<hr />
                    </div>
                    </div>
*/
