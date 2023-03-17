import './Search.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CaretRightFill } from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup'

export function Search({onSearch}) {
  const [searchIP, setSearchIP] = useState(null)

  const handleSearch = () => {
    onSearch(searchIP);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="search-container">
      <img id="desktop-background" src="pattern-bg-desktop.png" alt="Background pattern"/>
      <h3 className='app-title'>IP Address Tracker</h3>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" id="ip-search">
          <Form.Control
            placeholder="Search for any IP address or domain"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            defaultValue={searchIP}
            onChange={(event) => setSearchIP(event.target.value)}
          />
          <Button variant="outline-secondary" type="submit" id="button-addon2">
            <CaretRightFill />
          </Button>
        </InputGroup>
      </form>
    </div>
  );
}
