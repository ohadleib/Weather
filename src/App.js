import React, { useState, useEffect } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";

function App() {
  const [city, setCity] = useState({});
  const [daysData, setDaysData] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const setHomeScreen = (favoriteWeatherObj, favoriteCityObj) => {
    setCity(favoriteCityObj);
    setDaysData(favoriteWeatherObj);
  };

  const fetchData = async (searchParams = "tel aviv") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=jgf7NOHFw98Guj8rjZKg1SAFPbNrTkcD&q=${searchParams}`
      );
      const responseData = await response.json();
      setCity(responseData[0]);
      const weatherResponse = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${responseData[0].Key}?apikey=jgf7NOHFw98Guj8rjZKg1SAFPbNrTkcD`
      );
      const weatherResponseData = await weatherResponse.json();
      setDaysData(weatherResponseData);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };


  const addToFavorites = (dailyWeather, city) => {
    setFavorites([...favorites, { ...dailyWeather, city, daysData }]);
  };

  const removeFromFavorites = (key) => {
    const newFavorites = favorites.filter((el) => el.city.Key !== key);
    setFavorites(newFavorites);
  };


  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <BrowserRouter>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact component={() => ( <HomePage city={city} daysData={daysData} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}
                favorites={favorites} fetchData={fetchData} /> )} />

          <Route path="/favorites" exact component={() => ( <Favorites setHomeScreen={setHomeScreen} favorites={favorites} /> )} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;