const database = {
    movies: [
        {
            name: "Guardians of the Galaxy Vol. 2",
            released: "10 April 2017",
            image: "http://is5.mzstatic.com/image/thumb/Music111/v4/83/fb/73/83fb735f-8779-79ad-b835-4bf3a961177a/source/100000x100000-999.jpg",
            cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
            genres: ["Action", "Sci-Fi"],
            description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego."
        }
    ],

    select: function(key, value) {
        var results = [];

        for (var movie of database.movies) {
            if (movie[key] == value) {
                results.push(movie);
            }
        }

        return results;
    },
};

function displayMovieInformation(movieName) {
    document.getElementById("navbar-links-login").setAttribute("class", "navbar-link");
    document.getElementById("login-view").setAttribute("class", "login-view");
    document.getElementById("movies-view").setAttribute("class", "movies-view");
    document.getElementById("info-view").setAttribute("class", "info-view active");

    var movie = database.select("name", movieName)[0];
    if (movie == null || movie == undefined) return;

    var coverArt = document.getElementById("info-view-movie-cover-art");
    coverArt.setAttribute("src", movie.image);
    coverArt.setAttribute("alt", movie.name);

    document.getElementById("info-view-movie-name").innerText = movie.name;
    document.getElementById("info-view-movie-released").innerText = `Released ${movie.released}`;

    var genresAndCast = "";
    for (var i = 0; i < movie.genres.length; i++) {
        genresAndCast += movie.genres[i];
        if (i != movie.genres.length - 1) genresAndCast += ", ";
    }

    genresAndCast += " | ";

    for (var i = 0; i < movie.cast.length; i++) {
        genresAndCast += movie.cast[i];
        if (i != movie.cast.length - 1) genresAndCast += ", ";
    }

    document.getElementById("info-view-movie-genres-and-cast").innerText = genresAndCast;
    document.getElementById("info-view-movie-description").innerText = movie.description;
}

function loadMovies() {
    console.log("loading movies");
    var ul = document.getElementById("movies-view-movies");
    for (var movie of database.movies) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("class", "movies-movie");

        var img = document.createElement("img");
        img.setAttribute("src", movie.image);
        img.setAttribute("alt", movie.name);
        img.setAttribute("width", "500");
        img.setAttribute("height", "600");

        a.addEventListener("click", () => displayMovieInformation(movie.name));

        a.append(img);
        li.append(a);
        ul.append(li);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadMovies();

    document.getElementById("navbar-links-home").addEventListener("click", function() {
        this.setAttribute("class", "navbar-link active");
        document.getElementById("navbar-links-login").setAttribute("class", "navbar-link");
        document.getElementById("movies-view").setAttribute("class", "movies-view active");
        document.getElementById("login-view").setAttribute("class", "login-view");
        document.getElementById("info-view").setAttribute("class", "info-view");
    });

    document.getElementById("navbar-links-login").addEventListener("click", function() {
        document.getElementById("navbar-links-home").setAttribute("class", "navbar-link");
        this.setAttribute("class", "navbar-link active");
        document.getElementById("movies-view").setAttribute("class", "movies-view");
        document.getElementById("login-view").setAttribute("class", "login-view active");
        document.getElementById("info-view").setAttribute("class", "info-view");
    });

    document.getElementById("info-view-back-home").addEventListener("click", function() {
        document.getElementById("navbar-links-home").setAttribute("class", "navbar-link active");
        document.getElementById("navbar-links-login").setAttribute("class", "navbar-link");
        document.getElementById("movies-view").setAttribute("class", "movies-view active");
        document.getElementById("login-view").setAttribute("class", "login-view");
        document.getElementById("info-view").setAttribute("class", "info-view");
    });
});
