// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   
 return    moviesArray.map(movie=>movie.director )
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    return moviesArray.filter(movie=>{ return movie.director==='Steven Spielberg' &&  movie.genre.includes('Drama')}).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0) return 0
    return  parseFloat(parseFloat((moviesArray.map(movie=>{ if(movie.score) {return movie.score}else{return 0}}).reduce((tot, score)=>tot+score))/moviesArray.length).toFixed(2))

}
//console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray=moviesArray.filter(movie=>{ return (movie.genre.includes('Drama'))}).map(movie=>movie.score)
    if(dramaMoviesArray.length===0) return 0
    return  parseFloat (parseFloat (dramaMoviesArray.reduce((tot, score)=>tot+score)/dramaMoviesArray.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

   return  moviesArray.slice().sort((a,b)=>{
    if (a.year < b.year) return 1; //  1 here (instead of -1 for ASC)
    if (a.year > b.year) return -1; // -1 here (instead of  1 for ASC)
    if (a.year === b.year) return a.title -b.title;
   }   
    ).reverse();
}
console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return  moviesArray.map(movie=>movie.title).sort().slice(0,20)

}
console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

 
 return moviesArray.map(movie=>{
         
    let timeParts = movie.duration.split(" ");
    if(timeParts.length>1){
        movie.duration= Number(parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]));
    }
    else{
        movie.duration= Number(parseInt(timeParts[0]) * 60)
    }
   
  return movie;
   }).slice()


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
