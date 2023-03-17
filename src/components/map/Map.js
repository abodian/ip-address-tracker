import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'


export function Map({coordinates}) {
  let position = [51.5074, -0.1278]

  if (Array.isArray(coordinates) && coordinates.length === 2) {
    position = coordinates;
  }

  // --- (6) Create a custom marker ---
  const customIcon = new Icon({
    iconUrl: '/map-icon.png',
    iconSize: [20, 30],
  })

  return (
    <section className='map-component' >
      <div className='map'>
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
        />
        <Marker position={position}
          icon={customIcon}
        >
        </Marker>
      </MapContainer>
      </div>
    </section>
  )
}