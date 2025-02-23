const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const row1 = document.querySelector("#row1");
const input = document.querySelector("#input");
    const getmovies = async (url) => {
        const getfetch = await fetch(url);
        const getvalue = await getfetch.json();
        // showMovie(getvalue.results)
console.log(getvalue)

    }
    getmovies(API_URL)

    function showMovie(data){
        row1.innerHTML = "";
        data.forEach(
            (d,i) => {
                
                const movie = document.createElement("div");
                movie.classList.add("col-3")
                movie.innerHTML = ` <img src=${IMGPATH+d.poster_path} alt="">
          <div class="overlay">
<h1>${d.title}</h1>
<h2>${d.vote_average}</h2>
<h3>hiiii</h3>
          </div>`

          row1.appendChild(movie)
          console.log(row1)
            }
        )

        

    }

    
 
input.addEventListener(
    "keyup",
    (e) => {
if(e.target.value != ""){
     getmovies(SEARCHAPI + e.target.value)
     
}else{
   getmovies(API_URL)
}


    }
)