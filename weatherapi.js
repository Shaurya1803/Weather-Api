
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("input")
    const button = document.getElementById("mybutton")
    const city = document.getElementById("city")
    const temperature = document.getElementById("temperature")
    const weather = document.getElementById("weather")

    const API_KEY = "666231a2934e932f8feb8996805d84c3";

    button.addEventListener('click', (Event) => {
        const cityName = input.value.trim();

        if (cityName === "") {
            weather.textContent = "Please enter a city name";

        } else {
            getData(cityName);
        }
    })  
            
           
    

    async function getData(cityName) {
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`);
                    
                    if (!response.ok) {
                        city.textContent = "";
                        temperature.textContent = "";
                        weather.textContent = "City not found";
                        return;
                    }
                    const data = await response.json()

                    const cityNameValue = data.name;
                    const temperatureValue = data.main.temp;
                    const weatherValue =  data.weather[0].description;
                    displayData( cityNameValue , temperatureValue , weatherValue)

                } catch (error) {
                        city.textContent = "";
                        temperature.textContent = "";
                        weather.textContent = "Unable to get weather. Please try again.";
                        console.error(error);
                    
                }
    }

     function displayData(cityNameValue , temperatureValue , weatherValue) { 
        city.textContent = cityNameValue;
        temperature.textContent = `${temperatureValue} °F`;
        weather.textContent = weatherValue;
    }

        
    



})

