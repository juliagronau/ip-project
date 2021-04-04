import axios from "axios";
import { useEffect, useState } from "react";

const CountryInfo = ({ country }) => {
  const [countryInfo, setCountryInfo] = useState("");
  let flagUrl = `https://www.countryflags.io/${country}/shiny/64.png`;

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then(response => {
        setCountryInfo(response.data);
      })
      .catch(err => {
        alert(err);
      });
  }, [country]);

  return (
    <div>
      <h2>Here are some interesting facts about {countryInfo.name}.</h2>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <i className="users icon"></i>
            <div className="description">
              <p>
                The population of {countryInfo.name} is {countryInfo.population}
                .
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <i className="clock outline icon"></i>
            <div className="description">
              {countryInfo ? (
                <p>
                  The timezone in {countryInfo.name} is {countryInfo.timezones}.
                </p>
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <i className="comment alternate outline icon"></i>
            <div className="description">
              <p>Here are some other ways to spell {countryInfo.name}:</p>
              <ul>
                {countryInfo
                  ? countryInfo.altSpellings.map(spelling => (
                      <li key={spelling}>{spelling}</li>
                    ))
                  : "Loading..."}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <i className="flag icon"></i>
            <div className="description">
              <p>The flag of {countryInfo.name} looks like this:</p>
              {<img src={flagUrl} alt="flag" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
