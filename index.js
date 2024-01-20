const search = document.querySelector('#cityInput');
        const buttonn = document.querySelector('#searchButton');
        const weathericon = document.querySelector(".container");
        const apikey = "ed8cde05771560354a66f2034c9ab063";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        async function weather(city) {
            try {
                const recive = await fetch(apiurl + city + `&appid=${apikey}`);
                if (!recive.ok) {
                    throw new Error(`Failed to fetch weather data: ${recive.status}`);
                }

                const data = await recive.json();
                console.log(data);

                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector('.state').innerHTML = data.name;
                document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
                document.querySelector('.wind').innerHTML=data.wind.speed+"Km/h"
                document.querySelector('.state2').innerHTML=data.weather[0].main;
                if (data.weather[0].main == "Clear") {
                    weathericon.style.backgroundImage = `url('bg.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else if (data.weather[0].main == "Rain") {
                    weathericon.style.backgroundImage = `url('heavy.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else if (data.weather[0].main == "Clouds") {
                    weathericon.style.backgroundImage = `url('clouds.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else if (data.weather[0].main == "Mist") {
                    weathericon.style.backgroundImage = `url('mist.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else if (data.weather[0].main == "Drizzle") {
                    weathericon.style.backgroundImage = `url('Rain.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else if (data.weather[0].main == "Smoke") {
                    weathericon.style.backgroundImage = `url('smoke.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else if (data.weather[0].main == "Snow") {
                    weathericon.style.backgroundImage = `url('snow.jpg')`;
                    weathericon.style.backgroundsize = `cover`;
                } 
                else {
                    console.log("not found");
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        buttonn.addEventListener('click', () => {
            weather(search.value);
        });