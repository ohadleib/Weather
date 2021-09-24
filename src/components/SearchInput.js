import React, { useState, useEffect } from "react";

const SearchInput = (props) => {
  const [searchParams, setSearchParams] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [display, setDisplay] = useState(false)
    const displayBtn = () => {
      if (searchParams.length > 2)
        setDisplay(!display)
    }

  useEffect(() => {
    const fetchAutoComplete = async () => {
      let fetchedSuggestions = [];
      console.log("asd");
      if (searchParams.length > 2) {
        try {
          const response = await fetch(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=NDGL9OuGjW6yMqRCrJSIP8sdlGwnaFyh&q=${searchParams}`
          );
          console.log(response)
          const responseData = await response.json();
          console.log(responseData)
          fetchedSuggestions = responseData.map((el) => el.LocalizedName);
          fetchedSuggestions = [...new Set(fetchedSuggestions)];
          console.log(fetchedSuggestions);
          setSuggestions(fetchedSuggestions);
          displayBtn();
        } catch (err) {
          return (
            <div>
              <h2>Some Error Happend!</h2>
            </div>
          );
        }
      }
    };
    if (searchParams.length > 2) {
      fetchAutoComplete();
    } else {
      return;
    }
  }, [searchParams]);

  
  return (
    <div>
      <div className="homepage">
        <div className="homepage-search-bar">
          <div className="homepage-search-bar--input-div"></div>
          <input placeholder="City Location" className="homepage-search-input" value={searchParams} onChange={(e) => setSearchParams(e.target.value)} />
          <div className="homepage-search--icon">
            <i onClick={() => props.fetchData(searchParams)} className="gg-search"  ></i>
          </div>
        </div>
        { display &&  <ul className="AutoComlete" >
          {suggestions.map((city) => ( 
            <li onClick={() =>  displayBtn() + props.fetchData(searchParams) + setSearchParams(city)} key={city} style={{cursor:'pointer'}}> {city}   </li>
          ))}
        </ul>}
      </div>
    </div>
  );
};

export default SearchInput;