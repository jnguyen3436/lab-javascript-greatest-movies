function ratesAverage(movies) {
    const totalRate = movies.reduce((sum, eachMovie) => {
        return sum += Number(eachMovie.rate);
    }, 0);
//Found Average and made sure it was rounded
    const averageRate = Math.round(totalRate / movies.length * 100) / 100;
    return averageRate;
}



// Iteration 2: Drama movies - Get the average of Drama Movies
//fills new array if it has drama in the genre
function dramaMoviesRate(movies) {
    let isDrama = movies.filter(eachMovie => {
        return eachMovie.genre.indexOf('Drama') === 0;
    });
//checks if Array is empty
    if (isDrama.length === 0) {
        return 0;
    }
//gets average rate of just drama videos
    return ratesAverage(isDrama);
}
//ORDER MOVIES BY YEAR
function orderByYear(movies){
    sortedMovies = movies.sort(function(a,b){
      if (a.year !== b.year) {
      return a.year - b.year;
    } else {
     return a.title.localeCompare(b.title);
    }
    })
    return sortedMovies
    }


function howManyMovies(movies) {
    const filteredSS = movies.filter(eachMovie => eachMovie.director.includes('Steven Spielberg'));
    const dramaSS = filteredSS.filter(eachMovie => eachMovie.genre.includes('Drama'));
    return dramaSS.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const movieTitle = movies.map(anything => anything.title)

    const sortTitle = movieTitle.sort().splice(0, 20);
    return sortTitle;
}-


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(time) {

    let finalArray = time.map((eachMovie) => {

        eachMovie = Object.assign({}, eachMovie);
        // console.log(eachMovie)
        const t = eachMovie.duration
        //console.log(t)

        if (t.includes('h') && t.includes('min')) {
            const h = Number(t.split('h')[0] * 60);
            const m = Number(t.split(' ')[1].split('min')[0]);
            const sum = h + m
            eachMovie.duration = sum
            //console.log(eachMovie)
        } else if (!t.includes('min')) {
            const h = Number(t.split('h')[0] * 60);
            eachMovie.duration = h
            //console.log(eachMovie)
        } else {
            const m1 = Number(t.split('min')[0]);
            eachMovie.duration = m1
            //console.log(eachMovie)
        }
        // console.log(eachMovie)
        return eachMovie
    })
    console.log(finalArray);

    return finalArray
}

//BONUS
function bestYearAvg(movies){
    //Sort by year
    if (movies.length === 0)
    {
      return null;
    }
    let yearSortedArr = movies.sort(function(a,b){
      return Number(a.year - b.year);
    });
    //Split sorted array
    let splitYear = [];
    for (i = 0; i < 250; i++){
      splitYear.push([]);
    }
    let count = 0;
    let year = yearSortedArr[0].title
    let index = 0;
    previousYear = 0;
    while (count < yearSortedArr.length)
    {
      if (yearSortedArr[count].year != previousYear)
      {
        index++;
        previousYear = yearSortedArr[count].year;
      }
      splitYear[index].push(yearSortedArr[count])
      count++;
    }
    splitYear.splice(0,1);
    //Splice empty array values off of end of sorted array
    for (i = 0; i < splitYear.length; i++)
    {
      if(splitYear[i].length === 0)
      {
        splitYear = splitYear.splice(0, i)
      }
    }
    let sum = 0;
    let scoreArray = [];
    //Sum score on each split array
    for (i = 0; i < splitYear.length; i++)
    {
      sum = 0;
      for (j = 0; j < splitYear[i].length; j++)
      {
        sum += Number(splitYear[i][j].rate);
      }
      scoreArray.push(sum);
    }
    //Divide score by length of array, push to new array of scores
    let avgArray = scoreArray.map(function(sum, i){
      return sum / splitYear[i].length;
    });
    //Find max score in array
    let max = 0;
    index = 0;
    avgArray.forEach(function(score, i){
      if (score > max){
        max = score;
        index = i;
      }
    });
    //Associate it with year in second array
    return "The best year was " + splitYear[index][0].year + " with an average rate of " + max;
  }
