function login() {
    window.location.href = "login.html";
}

function favs() {
    window.location.href = "favs.html";
}

function loc() {
    window.location.href = "loc.html";
}

function home() {
    window.location.href = "index2.html";
}

const apiKey = '2a6494e2f7409a33fe107b3bca107695';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        searchMovies(searchTerm);
    }
});

function searchMovies(query) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.results))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(movies) {
    resultsDiv.innerHTML = '';

    if (movies.length === 0) {
        resultsDiv.innerHTML = '<h3>Movie not found!</h3>';
        return;
    }

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        movieDiv.appendChild(title);
        movieDiv.appendChild(overview);
        resultsDiv.appendChild(movieDiv);
    });
}

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTY0OTRlMmY3NDA5YTMzZmUxMDdiM2JjYTEwNzY5NSIsInN1YiI6IjY0ZWQ4YjBlYzYxM2NlMDEyY2M2ZTdkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pDqATnw2vY5s8jxKMbRLibTd7cM0SS-ibUQq0SeM10k'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/20368528', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


