import axios from 'axios';
import {useEffect, useState} from 'react';

const CountryInfo = ({country}) => {
    const [countryPop, setCountryPop] = useState('')
    const [countryName, setCountryName] = useState('')
    let flagUrl= `https://www.countryflags.io/${country}/shiny/64.png`


useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`)
        .then(response => {
            setCountryPop(response.data.population);
            setCountryName(response.data.name)
            console.log(response);
        })
        .catch(err => {
            alert(err);
          })
}, [country])

    return (
        <div>
            <p>The population of {countryName} is {countryPop}</p>
            {<img src={flagUrl} alt='flag' />}
        </div>
    )
}

export default CountryInfo
