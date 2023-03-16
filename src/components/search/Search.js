import './Search.css';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CaretRightFill } from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup'
import axios from "axios"
const API_KEY = process.env.REACT_APP_API_KEY

export function Search() {
  const [geoLocation, setGeoLocation] = useState(null)


  const fetchGeoLocation = () => {
    return axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`)
      .then((response) => setGeoLocation(response.data))
      .then(console.log(geoLocation))
  }

  // useEffect(() => {
  //   fetchGeoLocation();
  // },[])

  return (
    <div className="search-container">
      <img id="desktop-background" src="pattern-bg-desktop.png" alt="Background pattern"/>
      <h3 className='app-title'>IP Address Tracker</h3>
      <InputGroup className="mb-3" id="ip-search">
        <Form.Control
          placeholder="Search for any IP address or domain"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          <CaretRightFill />
        </Button>
      </InputGroup>
    </div>
  );
}

