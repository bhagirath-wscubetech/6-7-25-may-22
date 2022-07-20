var API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
var searchInput = $("#search")
$("#btn").on(
    "click",
    function() {
        var cityName = searchInput.val();
        $("#weather").html(`<h2> Searching for ${cityName}.... </h2>`)
        getData(cityName)
    }
)

function getFormattedDate(timestamp) {
    return new Date(timestamp).toLocaleTimeString()
}

async function getData(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    var resp = await fetch(url)
    var data = await resp.json()
        // console.log(data);
    if (data.cod == "404") {
        $("#weather").html(`<h2> ${data.message} </h2>`)
    } else {
        $("#weather").html(
            `
             <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main} </h4>
            </div>
            <hr>
            <hr>
            <div>
                Sunrise: ${getFormattedDate(data.sys.sunrise * 1000)}
                <br>
                Sunset: ${getFormattedDate(data.sys.sunset * 1000)}
            </div>
            `
        )
    }
}