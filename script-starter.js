// Function runs on page load to view current popular movies in the US
// endpoint here: https://developer.themoviedb.org/reference/movie-popular-list
function getPopularMovies(){
    // the endpoint
    // TO DO
    // the place on the page where we'll display the movies
    let popularMovies = document.getElementById("popular");
    let imgUrl = "https://image.tmdb.org/t/p/w400";


    // ajax time!
    // create the object
    // TO DO

    // attach event handlers
    // TO DO
    // set the response type
    // TO DO
    // open the request
    // TO DO

    // send the request
    // TO DO
}

// function runs only after a year is entered/chosen and submitted through the form
// endpoint here: https://developer.themoviedb.org/reference/discover-movie
function getBirthYearMovies(e){
    e.preventDefault();

    // Get the user's input/year value
    // TO DO
    // the place on the page where we'll add the info
    let birthYearMovies = document.getElementById("birthYear");

    if(year < 1940 || year > 2024 || year == ""){
        birthYearMovies.innerHTML = `<p style="color: red; background-color: white;">Please enter a year between 1940 and 2022</p>`;
    }else{
        // TO DO - Build the endpoint we need
        // TO DO
        let imgUrl = "https://image.tmdb.org/t/p/w400";

        // ajax time!
        // create the object
        // TO DO

        // attach event handlers
        // TO DO
        // set the response type
        // TO DO
        // open the request
        // TO DO
        // attach the headers (optional)

        // send the request
        // TO DO
    }
}

window.addEventListener("load", function(){
    getPopularMovies();
    document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});
