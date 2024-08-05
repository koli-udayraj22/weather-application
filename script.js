const apikey ="9fa95a631d7f7642bce45a946770394d"
const apiurl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const SearchBox =document.querySelector(".search input");
const SearchBtn =document.querySelector(".search button");

async function CheckWeather(city){
    console.log(city);
      const response= await fetch(apiurl  + city + `&appid=${apikey}`);
      var data = await response.json();

      console.log(data);

      document.querySelector(".city").innerHTML = data.name; 
      document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C"; 
      document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
      document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr"; 
    

}

document.addEventListener("click",()=>{
    if(SearchBox.value===""){
        return null;
    }
    CheckWeather(SearchBox.value);
})


