let searchIcon = document.getElementById('search-icon');
let seach = document.getElementById('search');
searchIcon.addEventListener("click", function() {
    search.classList.add("openSearch");
    searchIcon.classList.add("openSearchIcon");
    search.focus();
}, false);
