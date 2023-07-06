import axios from "axios";


const Fetch =()=>{
    let city = document.querySelector('#cityName').value;
    let key = '9310147d5a2cdb67e5ba708d40021005';
    
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${city}` ;
    fetch(url, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
    document.querySelector('#observationTime').value = `Observation Time: ${response.current.observation_time}` 
    document.querySelector('#temperature').value = `Temperature :  ${response.current.temperature} Degrees Celsius`;
    document.querySelector('#humidity').value = `Humidity: ${response.current.humidity}` ;
    document.querySelector('#visibility').value =  `Visibility: ${response.current.visibility}` ;
    document.querySelector('#windSpeed').value = `Wind Speed: ${response.current.wind_speed}` ;
    document.querySelector('#weatherDescriptions').value = `Weather Descriptions: ${response.current.weather_descriptions[0]}` ;
    document.querySelector('#weatherImage').src = response.current.weather_icons;
    

    

    

    }, (error)=>{
       console.log(error);
    }) 


}


export default Fetch;