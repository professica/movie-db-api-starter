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

        // conditional to check the ready status of the call
        // TO DO

            // date object for adding release dates
            let date;
            /*
                // This code can be used for the display of the featured movie
                // (it is a string template)
                 html += `<section id="featured">
                    <h3>${"TO DO"}</h3>
                    <img src="${"TO DO"}" alt="">
                    <p>Released: ${"ADD MONTH"}-${"ADD DAY OF MONTH"}-${"ADD YEAR"}</p>
                    <p>"${"TO DO"}"</p>
                </section>`;

                // loop through array of movies to add 18 more to the page after the featured movie
                // TO DO

                    // reassign the date object for current movie's date
                    // TO DO
        
                    // This code can be used for the display of the other popular movies (18 of them)
                    // (it is a string template)
                    html += `<section class="movie">
                        <img src="${"TO DO"}" alt="">
                        <div>
                            <h3>${"TO DO"}</h3>
                            <p>Released: ${"ADD MONTH"}-${"ADD DAY OF MONTH"}-${"ADD YEAR"}</p>
                            <p>${"TO DO"}
                                <span class="vote">Vote Average: ${"TO DO"}</span>
                            </p>
                        </div>
                    </section>`;

            // close the output loop
            // TO DO
        
            // add the html to the page
            popularMovies.innerHTML = html;

        // close the conditional that checks ready state
        // TO DO

    // close the event handler
    // TO DO
    
        
    */
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
    // the place on the page where we'll add the movies
    let birthYearMovies = document.getElementById("birthYear");

    if(year < 1940 || year > 2024 || year == ""){
        birthYearMovies.innerHTML = `<p style="color: red; background-color: white;">Please enter a year between 1940 and 2022</p>`;
    }else{
        // TO DO - Build the endpoint we need (this one has additional parameters)
        // TO DO
        let imgUrl = "https://image.tmdb.org/t/p/w400";

        // ajax time!
        // create the object
        // TO DO

        // attach event handlers
        // TO DO

            // check for ready state
            // TO DO

            /*
                // This code can be used for the display of the movies from the given year
                // It skips any movies that don't include a poster
            
                for(let i = 0; i < 12; i++){
                    if(json.results[i].poster_path === null){
                        continue;
                    }else{
                        // create/assign date object to store release date for movie
                        let date;
                    
                        html += `<section class="yrMovie">
                            <img src="${"TO DO"}" alt="">
                            <h3>${"TO DO"}</h3>
                            <p>Released: ${"ADD MONTH"}-${"ADD DAY OF MONTH"}-${"ADD YEAR"}</p>
                        </section>`; 
                    } // close else
                } // close for loop
            */
                // add output to the page
                // birthYearMovies.innerHTML = html;

            // close ready state conditional
            // TO DO

        // close event handler
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
