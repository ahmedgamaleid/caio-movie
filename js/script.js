let rowdata = document.getElementById("rowdata");

// Function to fetch and display currently playing movies
async function searchByName() {
  let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displayMovies(response.results);
}

function displayMovies(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    let title = arr[i].title;

    // Split the title into words
    const words = title.split(" ");

    // Take the first 4 words
    if (words.length > 4) {
      title = words.slice(0, 4).join(" ");
    }

    cartona += `
    <div class="col-lg-3 g-4">
      <div class="show position-relative overflow-hidden rounded-2">
        <img src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" class="w-100">
        <div class="show-layer position-absolute d-flex align-items-center justify-content-center text-black p-3">
        <p style="color:white;">${arr[i].overview.split(" ").slice(0, 20).join(" ")}</p>
        </div>
      </div>
      <div style="background-color:#052b46;" class="infocont d-flex justify-content-between px-1 py-2">
        <h5>${title}</h5>
        <div class="rate p-2 rounded-3" style="background-color: #130a2b; color: darkorange;">${arr[i].vote_average}</div>
      </div>
    </div>`;
  }
  rowdata.innerHTML = cartona;
}

// Call the searchByName function to fetch and display currently playing movies
// searchByName();

// Function to fetch and display TV show genres
async function gettvshow() {
  let response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displaytvshow(response.genres);
}

function displaytvshow(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
      <div class="col-lg-3 g-3">
        <div class="text-center rounded-2 p-3">
          <i class="fa-solid fa-film fa-4x" style="color: #e9ecf1;"></i>
          <h3>${arr[i].name}</h3>
        </div>
      </div>`;
  }
  const rowdataTvShow = document.getElementById('rowdata'); // Corrected the variable name
  if (rowdataTvShow) {
    rowdataTvShow.innerHTML = cartona; // Use the correct variable here
  } else {
    console.error('Element with id "rowdata" not found.');
  }
}

// Function to fetch and display movie genres
async function Getmovies() {
  let response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displayMovieGenres(response.genres); // Changed the function name here
}

function displayMovieGenres(arr) { // Changed the function name here
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
      <div class="col-lg-3 g-3">
        <div onclick="getmealdetails()" class="text-center rounded-2 p-3">
          <i class="fa-solid fa-film fa-4x" style="color: #e9ecf1;"></i>
          <h3>${arr[i].name}</h3>
        </div>
      </div>`;
  }
  const rowdataMovies = document.getElementById('rowdata'); // Changed the variable name here
  if (rowdataMovies) {
    rowdataMovies.innerHTML = cartona; // Use the correct variable here
  } else {
    console.error('Element with id "rowdata" not found.');
  }
}

// Function to fetch and display top-rated movies
async function gettoprate() {
  let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displaytoprate(response.results); // Updated to access response.results
}

function displaytoprate(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <div class="col-lg-3 g-4">
    <div class="show position-relative overflow-hidden rounded-2">
      <img src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" class="w-100">
      <div class="show-layer position-absolute d-flex align-items-center justify-content-center text-black p-3">
      <P style="color:white;">${arr[i].overview.split(" ").slice(0,20).join(" ")}</P>
      </div>
    </div>
    <div style="background-color:#052b46;" class="infocont d-flex justify-content-between px-1 py-2">
      <h5>${arr[i].title}</h5> <!-- Updated to use arr[i].title -->
      <div class="rate p-2 rounded-3" style="background-color: #130a2b; color: darkorange;">${arr[i].vote_average}</div>
    </div>
  </div>`;
  }
  const rowdataTvShow = document.getElementById('rowdata'); // Corrected the variable name
  if (rowdataTvShow) {
    rowdataTvShow.innerHTML = cartona; // Use the correct variable here
  } else {
    console.error('Element with id "rowdata" not found.');
  }
}

// Function to fetch and display upcoming movies
async function getupcome() {
  let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displayupcome(response.results); // Updated to access response.results
}

function displayupcome(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <div class="col-lg-3 g-4">
    <div class="show position-relative overflow-hidden rounded-2">
      <img src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" class="w-100">
      <div class="show-layer position-absolute d-flex align-items-center justify-content-center text-black p-3">
      <p style="color:white;">${arr[i].overview.split(" ").slice(0, 20).join(" ")}</p>
      </div>
    </div>
    <div style="background-color:#052b46;" class="infocont d-flex justify-content-between px-1 py-2">
      <h5>${arr[i].title}</h5> <!-- Updated to use arr[i].title -->
      <div class="rate p-2 rounded-3" style="background-color: #130a2b; color: darkorange;">${arr[i].vote_average}</div>
    </div>
  </div>`;
  }
  const rowdataUpcoming = document.getElementById('rowdata'); // Corrected the variable name
  if (rowdataUpcoming) {
    rowdataUpcoming.innerHTML = cartona; // Use the correct variable here
  } else {
    console.error('Element with id "rowdata" not found.');
  }
}

// Function to fetch and display trending TV shows
async function getTrendingTV(timeWindow) {
  let response = await fetch(`https://api.themoviedb.org/3/trending/tv/${timeWindow}?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displayTrendingTV(response.results);
}

function displayTrendingTV(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <div class="col-lg-3 g-4">
      <div class="show position-relative overflow-hidden rounded-2">
        <img src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" class="w-100">
        <div class="show-layer position-absolute d-flex align-items-center justify-content-center text-black p-3">
        <p style="color:white;">${arr[i].overview.split(" ").slice(0, 20).join(" ")}</p>
        </div>
      </div>
      <div style="background-color:#052b46;" class="infocont d-flex justify-content-between px-1 py-2">
        <h5>${arr[i].name}</h5>
        <div class="rate p-2 rounded-3" style="background-color: #130a2b; color: darkorange;">${arr[i].vote_average}</div>
      </div>
    </div>`;
  }
  const rowdataTrendingTV = document.getElementById('rowdata'); // Corrected the variable name
  if (rowdataTrendingTV) {
    rowdataTrendingTV.innerHTML = cartona; // Use the correct variable here
  } else {
    console.error('Element with id "rowdata" not found.');
  }
}

// To fetch trending TV shows for the day
getTrendingTV('week');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to fetch and display popular TV shows
async function getPopularTVShows() {
  let response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=deadc1edb0c5e61d6fae4833560728b9`);
  response = await response.json();
  console.log(response);
  displayTVShows(response.results);
}

function displayTVShows(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    let title = arr[i].name;

    // Split the title into words
    const words = title.split(" ");

    // Take the first 4 words
    if (words.length > 4) {
      title = words.slice(0, 4).join(" ");
    }

    cartona += `
    <div class="col-lg-3 g-4">
      <div class="show position-relative overflow-hidden rounded-2">
        <img src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" class="w-100">
        <div class="show-layer position-absolute d-flex align-items-center justify-content-center text-black p-3">
          <p style="color:white;">${arr[i].overview.split(" ").slice(0, 20).join(" ")}</p>
        </div>
      </div>
      <div style="background-color:#052b46;" class="infocont d-flex justify-content-between px-1 py-2">
        <h5>${title}</h5>
        <div class="rate p-2 rounded-3" style="background-color: #130a2b; color: darkorange;">${arr[i].vote_average}</div>
      </div>
    </div>`;
  }
  rowdata.innerHTML = cartona;
}

