import './Info.css';
import ListGroup from 'react-bootstrap/ListGroup';

export function InfoCard({ipAddress, postAddress, timeZone, isp}) {
  return (
    <ListGroup horizontal className='info-card'>
      <ListGroup.Item className='info-item'>
        <div className='info-text-container'>
          <div className='info-title'>IP ADDRESS</div>
          <div className='info-data' id='ip-address'>{ipAddress ? `${ipAddress}` : 'loading'}</div>
        </div>
        </ListGroup.Item>
      <ListGroup.Item className='info-item'>
        <div className='info-text-container'>
          <div className='info-title'>LOCATION</div>
          <div className='info-data' id='location'>
            {postAddress ? postAddress.map((address) => (
          < div key={address}>{address}</div>
           )) : 'loading'}
        </div>
        </div>
        </ListGroup.Item >
      <ListGroup.Item className='info-item'>
        <div className='info-text-container'>
         <div className='info-title'>TIMEZONE</div>
         <div className='info-data' id='timezone'>{timeZone ? `${timeZone}` : 'loading'}</div>
        </div>
        </ListGroup.Item>
      <ListGroup.Item className='info-item'>
        <div className='info-text-container'>
         <div className='info-title'>ISP</div>
         <div className='info-data' id='isp'>{isp? `${isp}` : 'loading'}</div>
        </div>
        </ListGroup.Item>
    </ListGroup>
  );
}