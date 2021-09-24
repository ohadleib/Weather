import React from "react";
import LocationBoxData from "../components/LocationBoxData";
import SearchInput from "../components/SearchInput";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <SearchInput fetchData={props.fetchData} />
      <LocationBoxData city={props.city} daysData={props.daysData} addToFavorites={props.addToFavorites} removeFromFavorites={props.removeFromFavorites}
        favorites={props.favorites} />
    </React.Fragment>
    
  );
};

export default HomePage;
