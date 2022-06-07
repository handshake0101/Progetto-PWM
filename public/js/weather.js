async function getWeather() {

    const key = "84f1ae78572d82dcbc53cc88117eaa97";

    var milanData = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=Milan&appid=" + key, {method: "GET"});
    var romeData = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=Rome&appid=" + key, {method: "GET"});
    var florenceData = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=Florence&appid=" + key, {method: "GET"});

    milanData = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4642162&lon=9.1898182&appid=84f1ae78572d82dcbc53cc88117eaa97&units=metric", {method: "POST"});
    romeData = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.8933203&lon=12.4829321&appid=84f1ae78572d82dcbc53cc88117eaa97&units=metric", {method: "POST"});
    florenceData = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.7698712&lon=11.2555757&appid=84f1ae78572d82dcbc53cc88117eaa97&units=metric", {method: "POST"});

    let milanObj = await milanData.json();
    let romeObj = await romeData.json();
    let florenceObj = await florenceData.json();

    document.getElementById('milan-temp'). innerText = 'Temperature: ' + Math.round(milanObj.main.temp) + '°';
    document.getElementById('milan-desc').innerText = 'Description: ' + milanObj.weather[0].description;

    document.getElementById('rome-temp'). innerText = 'Temperature: ' + Math.round(romeObj.main.temp) + '°';
    document.getElementById('rome-desc').innerText = 'Description: ' + romeObj.weather[0].description;

    document.getElementById('florence-temp'). innerText = 'Temperature: ' + Math.round(florenceObj.main.temp) + '°';
    document.getElementById('florence-desc').innerText = 'Description: ' + florenceObj.weather[0].description;

}

getWeather();