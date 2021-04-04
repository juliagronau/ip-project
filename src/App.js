import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";

function App() {
  let url =
    "https://geo.ipify.org/api/v1?apiKey=at_w8b2xFtEcMlHvyvoYFKB50tT6p9X0";
  const [loading, setIsLoading] = useState(true);
  const [ip, setIp] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setIp(response.data.ip);
        setUserData(response.data.location);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <h1>Location Explorer</h1>
      <p>Your IP-Address is {ip}</p>
      <div>
        {userData ? (
          <Map userData={userData} />
        ) : (
          <i className="spinner icon"></i>
        )}
      </div>
    </div>
  );
}

export default App;
