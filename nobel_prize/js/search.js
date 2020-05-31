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
									<div class="showResult">
						<h3>${item["knownName"]["en"]}</h3>
						<p>The nobel ${item["nobelPrizes"][0]["category"]["en"]} prize - ${
										item["nobelPrizes"][0]["awardYear"]
									}</p>
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
										item["birth"]["place"][
											"locationString"
										]["en"]
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
					<div class="showResult">
						<h3>Anwar Mohamed ElSadat</h3>
						<p>The nobel peace prize - 2001</p>
						<p>
							The award was given for keeping the community
							helpeless and faithful at the sametime.
						</p>
					</div>
*/
