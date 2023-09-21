const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', function () {
    searchBar.style.display = 'block';
    document.getElementById('search-text').focus();
});

document.addEventListener('click', function (e) {
    if (!searchBar.contains(e.target) && e.target !== searchIcon) {
        searchBar.style.display = 'none';
    }
});
