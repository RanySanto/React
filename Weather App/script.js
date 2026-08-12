const api_key = "1a0f7b2c79d87124b7ecd742c96174f3"


const local = document.getElementById("local")
const temp = document.getElementById("temp")
const current_day = document.getElementById("current-day")
const wind_speed = document.getElementById("wind-speed")
const humidity = document.getElementById("humidity")
const feels_like = document.getElementById("feels-like")
const climate = document.getElementById("climate")



fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_key}`)
    .then(response => response.json())
    .then(data=>{
        local.textContent = data.name
        temp.textContent = (Math.floor(data.main.temp -273.15))+"°"
            wind_speed.textContent = data.wind.speed + " km"
            climate.textContent = (data.weather[0].description)
            // // data.weather.main.icon,
            humidity.textContent = data.main.humidityconst api_key = "1a0f7b2c79d87124b7ecd742c96174f3"


const local = document.getElementById("local")
const temp = document.getElementById("temp")
const current_day = document.getElementById("current-day")
const wind_speed = document.getElementById("wind-speed")
const humidity = document.getElementById("humidity")
const feels_like = document.getElementById("feels-like")
const climate = document.getElementById("climate")

const cityInput = document.getElementById("city-input")
const cityBtn = document.getElementById("city-btn")

cityBtn.addEventListener("click", ()=>fetchData(cityInput.value))
async function fetchData(cityName){
    try{
        
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${1}&appid=${api_key}`)
        if (!response.ok){
            throw new Error("could not find city")
        }  

        const data = await response.json();
        const cityLat = data[0].lat
        const cityLon = data[0].lon

        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${api_key}`)
        if (!responseWeather.ok){
            throw new Error("could not get weather data")
        }
        const weatherData = await responseWeather.json();

        renderWeather(weatherData)
        
    }
    catch(error){
        console.error(error);
    }

}

function renderWeather(data){
local.textContent = data.name
    temp.textContent = (Math.floor(data.main.temp -273.15))+"°"
    wind_speed.textContent = data.wind.speed + " km"
    climate.textContent = (data.weather[0].description)
    // // data.weather.main.icon,
    humidity.textContent = data.main.humidity
    current_day.textContent = new Date().toDateString().replace("2026", "")
}
        
    })
    .catch(error=>{
        console.error(error)
    })

console.log(new Date())
