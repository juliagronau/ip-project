import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
let url = 'https://geo.ipify.org/api/v1?apiKey=at_w8b2xFtEcMlHvyvoYFKB50tT6p9X0';
const [loading, setIsLoading] = useState(true);
const [ip, setIp] = useState();

useEffect(() => {
  axios.get(url)
    .then(response => {
      setIp(response.data.ip)
      setIsLoading(false)
      console.log(response.data.ip);
    })
    .catch(err => {
      alert(err);
    })
}, []);
 
  return (
    <div className="App">
      <p>Your IP-Address is {ip}</p>
    </div>
  );
}

export default App;
