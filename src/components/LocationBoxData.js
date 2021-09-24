import React, { useState, useEffect } from "react";
import DailyBox from "./DailyBox";

const WeatherDailyData = (props) => {
  const [buttonContent, setButtomContent] = useState(true);

  const getDayFromDate = (date) => {
    const localeDateString = date.slice(0, 10).replace(/-/g, "/");
    return localeDateString;
  };

  // בודק אם הכפתור של הוספה או הסרה הוא טרו או פולס
  const favoritesHandler = () => {
    if (buttonContent) {
      props.addToFavorites(props.daysData.DailyForecasts[0], props.city);
    } else {
      props.removeFromFavorites(props.city.Key);
    }
  };console.log(props.daysData)


  useEffect(() => {
    const x = props.favorites.filter((el) => el.city.Key === props.city.Key);
    if (x.length) {
      setButtomContent(false);
    } else {
      setButtomContent(true);
    }
  }, [props.city, props.favorites]);

  if (!props.daysData || !props.daysData.DailyForecasts || !props.city)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className="location-box">
      <div className="location-box-header">
        <h2>
          {props.city.LocalizedName}
          <br />
          {props.daysData.DailyForecasts[0].Temperature.Minimum.Value} * F
          <br></br>
          {Math.floor(((props.daysData.DailyForecasts[0].Temperature.Minimum.Value)-32)* 5/9)} C
        </h2>
        <div className="location-box-favorite">
          <button className='button glow-button' onClick={favoritesHandler}>
            {buttonContent ? "Add To Favorites" : "Remove"}
          </button>
        </div>
      </div>
      <div className="location-box-content">
        {/* <h3> {props.daysData.Headline.Text} </h3> */}
        <ul className="location-box-days-ul">
          {props.daysData.DailyForecasts.map((el, i) => (
            <DailyBox key={el.Date + i} date={getDayFromDate(el.Date)} temp={el.Temperature.Maximum.Value} weather={el.Day.IconPhrase} /> ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherDailyData;
