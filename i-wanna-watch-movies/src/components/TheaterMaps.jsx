import { divIcon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const createPin = (color) =>
  divIcon({
    className: '', // removes Leaflet's default white box
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="${color}">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`,
    iconSize: [36, 36],
    iconAnchor: [18, 33], // the point of the pin that sits on the coordinates
    popupAnchor: [0, -30],
  })

export const Maps = ({theaters}) => {
  const centerPosition = [43.64610218876931, -79.37938038988169]

  return (
    <MapContainer center={centerPosition} zoom={12.2} scrollWheelZoom={false} style={{ height: 400, width: '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {theaters.map(t => (
        <Marker key={t.id} position={t.position} icon={createPin(t.color)}>
          <Popup>
            {t.name}
          </Popup>
        </Marker>
      ))}
      </MapContainer>
  )
}
