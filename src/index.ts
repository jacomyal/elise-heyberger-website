import { map, marker, tileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const workshopMap = map('map').setView([47.218371, -1.553621], 12);

tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a> | &copy; <a href="https://stamen.com/">Stamen Design</a> | &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(workshopMap);

const workshopMarker = marker([47.2239393, -1.5375341]).addTo(workshopMap);
workshopMarker
  .bindPopup('<b>Atelier Élise Heyberger</b><br>5 Rue du 3ᵉ Dragons, 44000 Nantes')
  .openPopup();
