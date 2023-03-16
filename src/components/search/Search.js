import './Search.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CaretRightFill } from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup'

export function Search() {
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

