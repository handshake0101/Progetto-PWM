async function getData(position, type) {
    const key = "84f1ae78572d82dcbc53cc88117eaa97";
    var milanData = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + position +"&appid=" + key, {method: "GET"});
    console.log(milanData);
}