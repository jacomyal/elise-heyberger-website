<script>
  import { onMount } from 'svelte';
  import { icon, map, marker, tileLayer } from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  onMount(() => {
    const workshopMap = map('map').setView([47.218371, -1.553621], 12);

    tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a> | &copy; <a href="https://stamen.com/">Stamen Design</a> | &copy; contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(workshopMap);

    const pinIcon = icon({
      iconUrl:
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='200px' height='200px' fill='%23265698' stroke-width='0' version='1.1' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(60 56.362 167.05)' fill='%230c3066'%3E%3Crect x='123.06' y='103.99' width='9.8884' height='48.017'/%3E%3Crect transform='rotate(90)' x='123.06' y='-152.01' width='9.8884' height='48.017'/%3E%3C/g%3E%3Cpath d='m134.41 85.001c5.9969-14.237 19.656-23.748 35.089-24.433 15.433-0.685 29.881 7.5786 37.115 21.228 7.2348 13.65 5.9636 30.245-3.2666 42.632-9.2302 12.388-24.769 18.353-39.917 15.324l-31.839 65.594c-1.9294 3.9748-6.9058 5.7717-6.9058 5.7717s-2.4588-4.9283-0.94686-9.0798l24.947-68.498c-15.67-10.745-21.633-31.022-14.275-48.539z' stroke='%23fff' stroke-width='2.432'/%3E%3C/svg%3E%0A",
      iconSize: [70, 70],
      iconAnchor: [35, 53],
      popupAnchor: [13, -30],
    });

    const workshopMarker = marker([47.2239393, -1.5375341], { icon: pinIcon }).addTo(workshopMap);
    workshopMarker.bindPopup('<b>Atelier Élise Heyberger</b><br>5 Rue du 3ᵉ Dragons, 44000 Nantes').openPopup();
  });
</script>

<style>
  #map {
    height: 100%;
    width: 100%;
  }
</style>

<div class="inset-0" id="map"></div>
