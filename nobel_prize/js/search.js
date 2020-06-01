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
		nobel_database.forEach((item) => {
			if (!isNaN(searchInput.value)) {
				if (item.hasOwnProperty("fullName")) {
					if (
						item["nobelPrizes"][0]["awardYear"]
						== (searchInput.value)) {
						console.log(item);
						searchResults.innerHTML += `
										<div class="showResult">
							<h3>${item["knownName"]["en"]}</h3>
							<p>The nobel ${item["nobelPrizes"][0]["category"]["en"]} prize - ${
							item["nobelPrizes"][0]["awardYear"]} ${item["nobelPrizes"].length > 1 ? "( and " + (item["nobelPrizes"].length - 1) + " more )" : ""}</p>
										<p class="transparent">
										${
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
								: item["birth"]["date"].substring(
									0,
									4
								)
							} ― ${
							item["birth"]["place"]["locationString"]["en"]
							}
										</p>
							<p class="transparent">
								The award was given ${item["nobelPrizes"][0]["motivation"]["en"]}.
								<br />
								<a href="/info.html?id=${item["id"]}">Read more</a>
							</p>
						</div>
			`;
					}
				}
			} else {
				if (searchInput.value.includes("c/")) {
					if (item.hasOwnProperty("fullName")) {
						let lowerCategory = item["nobelPrizes"][0]["category"]["en"].toLowerCase();
						if (lowerCategory.includes(searchInput.value.substring('c/'.length))) {
							console.log(item);
							searchResults.innerHTML += `
											<div class="showResult">
								<h3>${item["knownName"]["en"]}</h3>
								<p>The nobel ${item["nobelPrizes"][0]["category"]["en"]} prize - ${
								item["nobelPrizes"][0]["awardYear"]
								} ${item["nobelPrizes"].length > 1 ? "( and " + (item["nobelPrizes"].length - 1) + " more )" : ""}</p>
											<p class="transparent">
											${
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
									: item["birth"]["date"].substring(
										0,
										4
									)
								} ― ${
								item["birth"]["place"]["locationString"]["en"]
								}
											</p>
								<p class="transparent">
									The award was given ${item["nobelPrizes"][0]["motivation"]["en"]}.
									<br />
									<a href="/info.html?id=${item["id"]}">Read more</a>
								</p>
							</div>
				`;
						}
					}
				} else {
					if (item.hasOwnProperty("fullName")) {
						let lowerFullName = item["fullName"]["en"].toLowerCase();
						if (lowerFullName.includes(searchInput.value)) {
							console.log(item);
							searchResults.innerHTML += `
											<div class="showResult">
								<h3>${item["knownName"]["en"]}</h3>
								<p>The nobel ${item["nobelPrizes"][0]["category"]["en"]} prize - ${
								item["nobelPrizes"][0]["awardYear"]
								} ${item["nobelPrizes"].length > 1 ? "( and " + (item["nobelPrizes"].length - 1) + " more )" : ""}</p>
											<p class="transparent">
											${
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
									: item["birth"]["date"].substring(
										0,
										4
									)
								} ― ${
								item["birth"]["place"]["locationString"]["en"]
								}
											</p>
								<p class="transparent">
									The award was given ${item["nobelPrizes"][0]["motivation"]["en"]}.
									<br />
									<a href="/info.html?id=${item["id"]}">Read more</a>
								</p>
							</div>
				`;
						}
					}
				}

			}

		});
	}
}