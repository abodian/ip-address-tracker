import './App.css';
import axios from "axios"
import { useState, useEffect } from 'react'
import { Search } from '../search/Search.js'
import { Map } from '../map/Map.js'

function App() {
  const [ipAddress, setIpAddress] = useState(null)
  const [geoLocation, setGeoLocation] = useState(null)
  const [coordinates, setCoordinates] = useState(null)

  const handleIPAddressChange = (newIpAddress) => {
    setIpAddress(newIpAddress)
    console.log(newIpAddress)
  }

  useEffect(() => {
    if (!ipAddress) {
      const optionsClientIP = {
        method: 'GET',
        url: `https://api.ipify.org?format=json`,
      };

      axios.request(optionsClientIP)
        .then((response) => {
          setIpAddress(response.data.ip);
          console.log(response.data.ip)

          const optionsGeoLocate = {
            method: 'GET',
            url: `http://ip-api.com/json/${response.data.ip}`,
          };

          axios.request(optionsGeoLocate)
            .then((response) => {
              setGeoLocation(response.data);
              console.log(response.data)
              setCoordinates([response.data.lat, response.data.lon])
            })
            .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error))
    } else {
      const optionsGeoLocate = {
        method: 'GET',
        url: `http://ip-api.com/json/${ipAddress}`,
      };

      axios.request(optionsGeoLocate)
        .then((response) => {
          setGeoLocation(response.data);
          console.log(response.data)
          setCoordinates([response.data.lat, response.data.lon])
        })
        .catch((error) => console.log(error))
    }
  }, [ipAddress])

  return (
    <>
      <Search onSearch={handleIPAddressChange} />
      <Map coordinates={coordinates} />
    </>
  );
}

export default App;
