import React from "react";

const DailyBox = (props) => {
    
  return (
    
    <li onClick={props.onClick} >
      {props.city ? <p>{props.city}</p> : null}
      {props.weather === "Sunny"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/01-s.png" /> : null}
      {props.weather === "Mostly sunny"? <img alt="suny" src="https://developer.accuweather.com/sites/default/files/02-s.png" /> : null}
      {props.weather === "Partly sunny"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/03-s.png" /> : null}
      {props.weather === "Intermittent clouds"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/04-s.png" /> : null}
      {props.weather === "Hazy Sunshine"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/05-s.png" /> : null}
      {props.weather === "Mostly cloudy"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/06-s.png" /> : null}
      {props.weather === "Cloudy"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/07-s.png" /> : null}
      {props.weather === "Dreary (Overcast)"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/08-s.png" /> : null}
      {props.weather === "Fog"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/11-s.png" /> : null}
      {props.weather === "Showers"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/12-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ Showers"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/13-s.png" /> : null}
      {props.weather === "Partly Sunny w/ Showers"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/14-s.png" /> : null}
      {props.weather === "T-Storms"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/15-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ T-Storms"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/16-s.png" /> : null}
      {props.weather === "Partly Sunny w/ T-Storms"? <img alt="sun" src="hhttps://developer.accuweather.com/sites/default/files/17-s.png" /> : null}
      {props.weather === "Flurries"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/19-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ Flurries"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/20-s.png" /> : null}
      {props.weather === "Partly Sunny w/ Flurries"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/21-s.png" /> : null}
      {props.weather === "Snow"? <img alt="suny" src="https://developer.accuweather.com/sites/default/files/22-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ Snow"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/23-s.png" /> : null}
      {props.weather === "Ice"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/24-s.png" /> : null}
      {props.weather === "Sleet"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/25-s.png" /> : null}
      {props.weather === "Freezing Rain"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/26-s.png" /> : null}
      {props.weather === "Rain and Snow"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/29-s.png" /> : null}
      {props.weather === "Hot"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/30-s.png" /> : null}
      {props.weather === "Cold"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/31-s.png" /> : null}
      {props.weather === "Windy"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/32-s.png" /> : null}
      {props.weather === "Clear"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/33-s.png" /> : null}
      {props.weather === "Mostly Clear"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/34-s.png" /> : null}
      {props.weather === "Partly Cloudy"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/35-s.png" /> : null}
      {props.weather === "Intermittent Clouds"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/36-s.png" /> : null}
      {props.weather === "Hazy Moonlight"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/37-s.png" /> : null}
      {props.weather === "Partly Cloudy w/ Showers"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/39-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ Showers"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/40-s.png" /> : null}
      {props.weather === "Partly Cloudy w/ T-Storms"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/41-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ T-Storms"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/42-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ Flurries"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/43-s.png" /> : null}
      {props.weather === "Mostly Cloudy w/ Snow"? <img alt="sun" src="https://developer.accuweather.com/sites/default/files/44-s.png" /> : null}
      <p>{props.date}</p>
      <b>
        <p>{props.temp}* F</p>
      </b>
  
      <p > {props.weather} </p>
       
    </li>
  );
};

export default DailyBox;
