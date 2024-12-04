import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconGeolocation from '../../../../Images/Header/location.png';
import './styles.css';

const position = [40.51997058889528, -3.913963492434657];

// Crea el ícono personalizado
const customIcon = new L.Icon({
  iconUrl: iconGeolocation,
  iconSize: [25, 30],
  iconAnchor: [20, 5],
  popupAnchor: [0, -40],
});

const Mapa = () => {
  return (
    <MapContainer center={position} zoom={16.2} className='Mapa-Container'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          C/ Salónica, 43, Las Rozas (Madrid)
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;