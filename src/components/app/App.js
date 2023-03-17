import './App.css';
import axios from "axios"
import { useState, useEffect } from 'react'
import { Search } from '../search/Search.js'
import { Map } from '../map/Map.js'
import { InfoCard } from '../info/Info.js'

function App() {
  const [ipAddress, setIpAddress] = useState(null)
  const [geoLocation, setGeoLocation] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const [postAddress, setPostAddress] = useState(null)
  const [timeZone, setTimeZone] = useState(null)
  const [isp, setISP] = useState(null)

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
              setPostAddress([`${response.data.city},`, ` ${response.data.zip}`])
              setTimeZone(response.data.timezone)
              setISP(response.data.org)
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
          setPostAddress([`${response.data.city},`, ` ${response.data.zip}`])
          setTimeZone(response.data.timezone)
          setISP(response.data.org)
        })
        .catch((error) => console.log(error))
    }
  }, [ipAddress])

  return (
    <>
      <InfoCard ipAddress={ipAddress} postAddress={postAddress} timeZone={timeZone} isp={isp}/>
      <Search onSearch={handleIPAddressChange} />
      <Map coordinates={coordinates} />
    </>
  );
}

export default App;
