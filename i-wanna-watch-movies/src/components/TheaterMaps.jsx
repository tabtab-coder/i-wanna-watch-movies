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

const pins = [
  '#e53935', // revue: red
  '#fb8c00', // fox: orange
  '#f9a825', // imagine: amber
  '#43a047', // paradise: green
  '#00897b', // hotdocs: teal
  '#1e88e5', // dundas: blue
  '#8e24aa', // scotiabank: purple
  '#d81b60', // tiff: pink
].map(createPin)

export const Maps = ({theaters}) => {
  const centerPosition = [43.64610218876931, -79.37938038988169]
  const revue = [43.65124336639971, -79.45104597347124]
  const fox = [43.67297133217331, -79.28728944463488]
  const imagine = [43.661522671105, -79.3815251581288]
  const paradise = [43.66129928008207, -79.43073963114203]
  const hotdocs = [43.66558846416894, -79.41047540677636]
  const dundas = [43.65710370066342, -79.38035098696454]
  const scotiabank = [43.64898944087514, -79.3911660292939]
  const tiff = [43.64661574316246, -79.39034925730608]

  return (
    <MapContainer center={centerPosition} zoom={12.2} scrollWheelZoom={false} style={{ height: 400, width: '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={revue} icon={pins[0]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={fox} icon={pins[1]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={imagine} icon={pins[2]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={paradise} icon={pins[3]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={hotdocs} icon={pins[4]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={dundas} icon={pins[5]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={scotiabank} icon={pins[6]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={tiff} icon={pins[7]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

    </MapContainer>
  )
}
