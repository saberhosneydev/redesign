function loader() {
    let id = new URL(window.location.href).searchParams.get("id");
    nobel_database.forEach((item) => {
        let container = document.getElementById("resultsContainer");
        if (item["id"] == id) {
            container.innerHTML = `
            ${item["nobelPrizes"].length}<br>
            ${item["fullName"]["en"]}<br>
            ${item["gender"]}<br>
            ${item["birth"]["date"]}<br>
            ${item["birth"]["place"]["city"]["en"]}<br>
            ${item["birth"]["place"]["country"]["en"]}<br>
            ${item["birth"]["place"]["continent"]["en"]}<br>
            `;
        }
    });
}
