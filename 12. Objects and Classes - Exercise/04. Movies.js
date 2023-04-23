function movies(input) {
    let moviesArray = [];

    input.forEach(command => {
        if (command.includes('addMovie ')) {
            let name = command.split('addMovie ')[1];
            moviesArray.push({ name });
        } else if (command.includes('directedBy')) {
            let [nameMovie, director] = command.split(' directedBy ');
            let movie = moviesArray.find(el => el.name === nameMovie);

            if (movie) {
                movie.director = director;
            }
        } else if (command.includes('onDate')) {
            let [nameMovie, date] = command.split(' onDate ');
            let movie = moviesArray.find(el => el.name === nameMovie);

            if (movie) {
                movie.date = date;
            }
        }

    });
    moviesArray.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])