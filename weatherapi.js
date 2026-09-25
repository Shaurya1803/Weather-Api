const input = document.getElementById("input")
const button = document.getElementById("mybutton")
const city = document.getElementById("city")
const temperature = document.getElementById("temperature")
const weather = document.getElementById("weather")


button.addEventListener('click', (Event) =>{
    const cityName = input.value.trim();

    if(cityName === ""){
        console.log("enter the city name first")
    }else{
        console.log(cityName)
    }
})  