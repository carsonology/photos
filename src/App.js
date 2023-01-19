import './App.css';
import { useRef, useState, useEffect } from 'react';
import Globe from './Globe';
import City from './City'

function App() {

  const [center, setCenter] = useState({ city: 'Bloomington', country: 'United States of America', lat: 39.165034455001894, lng: -86.52709749458336 })

  const cities = [
    { city: 'Seville', country: 'Spain', lat: 37.39062703951371, lng: -5.984585976542619 },
    { city: 'Madrid', country: 'Spain', lat: 40.42846207575237, lng: -3.70838327912866 },
    { city: 'Barcelona', country: 'Spain', lat: 41.40674301418595, lng: 2.172445468344346 },
    { city: 'Cádiz', country: 'Spain', lat: 36.52121363868719, lng: -6.280493168409852 },
    { city: 'Lisbon', country: 'Portugal', lat: 38.72581205147599, lng: -9.138402737512495 },
    { city: 'Faro', country: 'Portugal', lat: 37.024297418399435, lng: -7.929991097117707 },
    { city: 'Paris', country: 'France', lat: 48.864190781287014, lng: 2.3484011419177273 },
    { city: 'Bloomington', country: 'United States of America', lat: 39.165034455001894, lng: -86.52709749458336 },
    { city: 'Shanghai', country: 'China', lat: 31.234613953773707, lng: 121.49182482486242 },
    { city: 'Dublin', country: 'Ireland', lat: 53.34514925004963, lng: -6.262876035412737 },
    { city: 'Rome', country: 'Italy', lat: 41.90691991182795, lng: 12.463206136073648 },
    { city: 'Florence', country: 'Italy', lat: 43.77671423937492, lng: 11.243712699148428 },
    { city: 'Venice', country: 'Italy', lat: 45.440602980065194, lng: 12.335140895235448 },
    { city: 'Pisa', country: 'Italy', lat: 43.71592742727962, lng: 10.396407671416194 },
    { city: 'Naples', country: 'Italy', lat: 40.8535848244167, lng: 14.252422729456109 }
  ]

  return (
    <div className="App">
      <Globe data={cities} center={center} setCenter={setCenter} />

      <h1>Cities</h1>

      {cities.map((city, index) => {
        return <City key={index} setCenter={setCenter} city={city} />
      })}

    </div>
  );
}

export default App;

