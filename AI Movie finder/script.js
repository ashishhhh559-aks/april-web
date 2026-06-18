const API_key = "9b33f20c";


const buttons = document.querySelectorAll("button")
//Here buttons - Array - Bcz it is store Multiple Html Button Tags

const moviesContainer = document.getElementById("movies-container")

buttons.forEach(btn =>{

   btn.addEventListener('click' , ()=>{

    const mood  = btn.dataset.mood;

         fetchMovie(mood)

   });
});
//Task 2 To Get The Movies on the basis of mood Value  

 async  function fetchMovie(movieName){

    
     moviesContainer.innerHTML = "<h2>Loading ....</h2>";

     const url = `https://www.omdbapi.com/?apikey=9b33f20c&s=${movieName}`;

     const response = await    fetch(url)
     const data     = await    response.json()   

     displayMovie(data.Search)


  }


  function displayMovie(movies){

 moviesContainer.innerHTML = "";

 movies.forEach(movie =>{
     
    const card = document.createElement("div")

    card.classList.add("movie-card")

    card.innerHTML = `
    <img src="${movie.Poster}">

    <div class="movie-info">
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
    </div>
    `;
      
    moviesContainer.appendChild(card)

  })


  }