import React from "react";
import DailyBox from "../components/DailyBox";
import { useHistory } from "react-router-dom";

const Favorites = (props) => {
  const history = useHistory();
  const getDayFromDate = (date) => {
    const localeDateString = date.slice(0, 10).replace(/-/g, "/");
    return localeDateString;
  };

  const redirectToFavoriteLocation = (weatherObj, cityObj) => {
    props.setHomeScreen(weatherObj, cityObj);
    history.push("/");
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        <ul className="favorites-list">
          {props.favorites.map((el, i) => (
            <DailyBox
              onClick={() => redirectToFavoriteLocation(el.daysData, el.city)}
              key={el.Date + i}
              city={el.city.LocalizedName}
              date={getDayFromDate(el.Date)}
              temp={el.Temperature.Maximum.Value}
              weather={el.Day.IconPhrase}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;