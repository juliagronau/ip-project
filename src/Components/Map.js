import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import CountryInfo from './CountryInfo'

const Map = ({userData: {city, country, lat, lng}}) => {
console.log(country);

return(
<div> 
  <p>You are currently located in {city}, {country}</p>     
  <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

  <CountryInfo country={country}/>
</div>   
   )
}



export default Map
