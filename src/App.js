import './App.css';
import { useRef, useState, useEffect } from 'react';
import Globe from './Globe';
import City from './City'

function App() {

  // const cities = [
  //   { city: 'Bloomington', country: 'United States of America', lat: 39.165034455001894, lng: -86.52709749458336 },
  //   { city: 'Seville', country: 'Spain', lat: 37.39062703951371, lng: -5.984585976542619 },
  //   { city: 'Granada', country: 'Spain', lat: 37.178068915817384, lng: -3.5952204551738918 },
  //   { city: 'Jeréz', country: 'Spain', lat: 36.69159629146686, lng: -6.123929611599998 },
  //   { city: 'Málaga', country: 'Spain', lat: 36.7261819450451, lng: -4.421459743176805 },
  //   { city: 'Rome', country: 'Italy', lat: 41.90691991182795, lng: 12.463206136073648 },
  //   { city: 'Paris', country: 'France', lat: 48.864190781287014, lng: 2.3484011419177273 },
  //   { city: 'Dublin', country: 'Ireland', lat: 53.34514925004963, lng: -6.262876035412737 },
  //   { city: 'Madrid', country: 'Spain', lat: 40.42846207575237, lng: -3.70838327912866 },
  //   { city: 'Barcelona', country: 'Spain', lat: 41.40674301418595, lng: 2.172445468344346 },

  //   { city: 'Cádiz', country: 'Spain', lat: 36.52121363868719, lng: -6.280493168409852 },
  //   { city: 'Faro', country: 'Portugal', lat: 37.024297418399435, lng: -7.929991097117707 },
  //   { city: 'Lagos', country: 'Portugal', lat: 37.10471736242999, lng: -8.673223105019055 },

  //   { city: 'Lisbon', country: 'Portugal', lat: 38.72581205147599, lng: -9.138402737512495 },
  //   // { city: 'Shanghai', country: 'China', lat: 31.234613953773707, lng: 121.49182482486242 },

  //   { city: 'Pisa', country: 'Italy', lat: 43.71592742727962, lng: 10.396407671416194 },
  //   { city: 'Florence', country: 'Italy', lat: 43.77671423937492, lng: 11.243712699148428 },
  //   { city: 'Venice', country: 'Italy', lat: 45.440602980065194, lng: 12.335140895235448 },
  //   { city: 'Naples', country: 'Italy', lat: 40.8535848244167, lng: 14.252422729456109 },
  //   { city: 'Seville', country: 'Spain', lat: 37.39062703951371, lng: -5.984585976542619 },
  //   { city: 'Washington, D.C.', country: 'United States of America', lat: 37.39062703951371, lng: -77.03656524782728 },
  //   { city: 'Winter Park', country: 'United States of America', lat: 38.90114820466761, lng: -105.76350088715927 },
  //   { city: 'Bloomington', country: 'United States of America', lat: 39.165034455001894, lng: -86.52709749458336 },
  // ]

  const images = [
    {
      city: { city: 'Seville', country: 'Spain', lat: 37.39062703951371, lng: -5.984585976542619 },
      images: [
        {
          path: "/images/sevilla/2022-02-03-catedral-09.jpg",
          orientation: "h",
          alt: "cubiertas de sevilla",
        },
        {
          path: "/images/sevilla/vsco61ed50b275d4c.jpg",
          orientation: "v",
          alt: "cafe",
          custom: 22
        },
        {
          path: "/images/sevilla/vsco6213519c01d10.jpg",
          orientation: "h",
          alt: "rio guadalquivir",
        },
        {
          path: "/images/sevilla/vsco61ed51792b40f.jpg",
          orientation: "v",
          alt: "catedral exterior",
          custom: 22
        },
        {
          path: "/images/sevilla/vsco61ed5115d8103.jpg",
          orientation: "h",
          alt: "tostada",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-76.jpg",
          orientation: "h",
          alt: "plaza de san francisco",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-07.jpg",
          orientation: "h",
          alt: "edificios de sevilla, vista de arriba de la giralda",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-65.jpg",
          orientation: "v",
          alt: "giralda con naranjas",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-74.jpg",
          orientation: "h",
          alt: "plaza cerca de la catedral",
        },
        // {
        //   path: "/images/sevilla/2022-02-03-catedral-71.jpg",
        //   orientation: "h",
        //   alt: "la giralda, vista de abajo",
        // },
        {
          path: "/images/sevilla/2022-02-03-catedral-69.jpg",
          orientation: "h",
          alt: "giralda, vista por encima del patio de naranjos",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-62.jpg",
          orientation: "h",
          alt: "patio de naranjos",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-57.jpg",
          orientation: "h",
          alt: "giralda",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-55.jpg",
          orientation: "v",
          alt: "interior de la catedral, cubiertas",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-30.jpg",
          orientation: "h",
          alt: "estatuo sin mano",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-40.jpg",
          orientation: "h",
          alt: "stained glass",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-01.jpg",
          orientation: "h",
          alt: "edificios por una ventana en la giralda",
        },
        {
          path: "/images/sevilla/vsco_050522.jpg",
          orientation: "v",
          alt: "dorothy",
          custom: 22
        },
        {
          path: "/images/sevilla/vsco62335c2c0d674.jpg",
          orientation: "v",
          alt: "vestido de feria",
          custom: 22
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-28.jpg",
          orientation: "h",
          alt: "hombros de los reyes llevando los huesos de cristobal colon",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-15.jpg",
          orientation: "h",
          alt: "cubiertas, vista exterior",
        },

        // {
        //   path: "/images/sevilla/2022-02-03-catedral-04.jpg",
        //   orientation: "h",
        //   alt: "cubiertas, vista de arriba de la giralda",
        // },
        {
          path: "/images/sevilla/2022-02-03-catedral-87.jpg",
          orientation: "h",
          alt: "una calle en la noche",
        },
        // {
        //   path: "/images/sevilla/2022-02-03-catedral-85.jpg",
        //   orientation: "h",
        //   alt: "puente en la noche con luces",
        // },
        {
          path: "/images/sevilla/2022-02-03-catedral-82.jpg",
          orientation: "h",
          alt: "bridge at night",
        },
        // {
        //   path: "/images/sevilla/2022-02-03-catedral-79.jpg",
        //   orientation: "h",
        //   alt: "amigas",
        // },
        // {
        //   path: "/images/sevilla/2022-02-03-catedral-47.jpg",
        //   orientation: "h",
        //   alt: "pared de oro en la catedral",
        // },
        // {
        //   path: "/images/sevilla/2022-02-03-catedral-44.jpg",
        //   orientation: "h",
        //   alt: "coro de la catedral",
        // },
        {
          path: "/images/sevilla/2022-02-03-catedral-42.jpg",
          orientation: "h",
          alt: "vista unica de interior de catedral",
        },
        {
          path: "/images/sevilla/2022-02-03-catedral-36.jpg",
          orientation: "v",
          alt: "imagen de la madre y el hijo",
          custom: 23
        },
        // {
        //   path: "/images/sevilla/2022-02-03-catedral-25.jpg",
        //   orientation: "h",
        //   alt: "reyes con cristobal",
        // },
        {
          path: "/images/sevilla/vsco_051822 (1).jpg",
          orientation: "h",
          alt: "atardecer por las setas",
        },
        {
          path: "/images/sevilla/vsco_051822 (2).jpg",
          orientation: "h",
          alt: "acuarela",
        },
        {
          path: "/images/sevilla/vsco_050922 (1).jpg",
          orientation: "h",
          alt: "la gente de la feria",
        },
        {
          path: "/images/sevilla/vsco_050922 (3).jpg",
          orientation: "h",
          alt: "caseta",
        },
        {
          path: "/images/sevilla/vsco_050922 (7).jpg",
          orientation: "h",
          alt: "caballos",
        },
        {
          path: "/images/sevilla/vsco_050922 (4).jpg",
          orientation: "v",
          alt: "mi sombra",
          custom: 22
        },
        {
          path: "/images/sevilla/vsco_050922 (2).jpg",
          orientation: "v",
          alt: "amigas",
          custom: 22
        },
        {
          path: "/images/sevilla/vsco_050922 (5).jpg",
          orientation: "v",
          alt: "mi pelo",
        },
        {
          path: "/images/sevilla/vsco_050922 (6).jpg",
          orientation: "h",
          alt: "la entrada",
        },
        {
          path: "/images/sevilla/vsco_050922.jpg",
          orientation: "h",
          alt: "atracciones de la feria",
        },

        // 2022-02-03-catedral-87.jpg
        // 2022-02-03-catedral-85.jpg
        // 2022-02-03-catedral-79.jpg
        // 2022-02-03-catedral-47.jpg
        // 2022-02-03-catedral-44.jpg
        // 2022-02-03-catedral-42.jpg
        // 2022-02-03-catedral-36.jpg
        // 2022-02-03-catedral-30.jpg
        // 2022-02-03-catedral-25.jpg
        // 2022-02-03-catedral-09.jpg
        // 2022-04-29-cubiertas-055.jpg
        // 2022-04-29-cubiertas-047.jpg
        // 2022-04-29-cubiertas-042.jpg
        // 2022-04-29-cubiertas-041.jpg
        // 2022-04-29-cubiertas-037.jpg
        // 2022-04-29-cubiertas-036.jpg
        // 2022-04-29-cubiertas-032.jpg
        // 2022-04-29-cubiertas-018.jpg
        // 2022-04-29-cubiertas-008.jpg
        // 2022-04-29-cubiertas-102.jpg
        // 2022-04-29-cubiertas-098.jpg
        // 2022-04-29-cubiertas-072.jpg
        // 2022-04-29-cubiertas-066.jpg
        // 2022-04-29-cubiertas-061.jpg
        // 2022-04-29-cubiertas-058.jpg
        // 2022-04-29-cubiertas-049.jpg
        // 2022-04-29-cubiertas-048.jpg
        // 2022-04-29-cubiertas-014.jpg
        // 2022-04-07-el-jueves-10.jpg
        // 2022-02-17-class-mirrors-35.jpg
        // 2022-02-17-class-mirrors-166.jpg
        // 2022-04-21-sevilla-33.jpg
        // 2022-04-21-sevilla-27.jpg
        // 2022-04-21-sevilla-29.jpg
        // 2022-04-21-sevilla-13.jpg
        // 2022-04-21-sevilla-26.jpg
      ]
    },
    {
      city: { city: 'Rome', country: 'Italy', lat: 41.90691991182795, lng: 12.463206136073648 },
      images: [
        {
          path: "/images/rome/2022-03-03-06-rome-273.jpg",
          orientation: "v",
          alt: "bridge",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-268.jpg",
          orientation: "h",
          alt: "st peters over the shoulder",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-216.jpg",
          orientation: "h",
          alt: "clouds above st peters square",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-202.jpg",
          orientation: "v",
          alt: "snake sculpture",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-161.jpg",
          orientation: "h",
          alt: "circle of angels",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-008.jpg",
          orientation: "v",
          alt: "girl w unicorn painting",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-028.jpg",
          orientation: "h",
          alt: "sculpture close up",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-164.jpg",
          orientation: "h",
          alt: "golden mosaic",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-265.jpg",
          orientation: "h",
          alt: "pigeon",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-105.jpg",
          orientation: "h",
          alt: "coliseum",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-073.jpg",
          orientation: "h",
          alt: "seagull",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-066.jpg",
          orientation: "h",
          alt: "arches",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-122.jpg",
          orientation: "v",
          alt: "st peters altar",
          custom: 22
        },
        {
          path: "/images/rome/2022-03-03-06-rome-057.jpg",
          orientation: "h",
          alt: "forum",
          custom: 8
        },
        {
          path: "/images/rome/2022-03-03-06-rome-284.jpg",
          orientation: "h",
          alt: "angel",
          custom: 8
        },
        {
          path: "/images/rome/2022-03-03-06-rome-253.jpg",
          orientation: "h",
          alt: "bridge long view",
          custom: 8
        },
        {
          path: "/images/rome/2022-03-03-06-rome-251.jpg",
          orientation: "v",
          alt: "blue angel",
          custom: 22
        },
        {
          path: "/images/rome/2022-03-03-06-rome-250.jpg",
          orientation: "h",
          alt: "seagull",
          custom: 12
        },
        {
          path: "/images/rome/2022-03-03-06-rome-155.jpg",
          orientation: "h",
          alt: "pieta",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-131.jpg",
          orientation: "h",
          alt: "st peters ceiling",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-125.jpg",
          orientation: "h",
          alt: "relief",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-086.jpg",
          orientation: "v",
          alt: "coliseum wall",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-047.jpg",
          orientation: "h",
          alt: "forum",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-044.jpg",
          orientation: "h",
          alt: "candles",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-234.jpg",
          orientation: "h",
          alt: "nina in museum",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-226.jpg",
          orientation: "h",
          alt: "st peters street view",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-193.jpg",
          orientation: "v",
          alt: "stone torso",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-183.jpg",
          orientation: "h",
          alt: "technicolor angel",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-181.jpg",
          orientation: "h",
          alt: "vatican ceiling",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-150.jpg",
          orientation: "v",
          alt: "baby angel",
        },
        {
          path: "/images/rome/2022-03-03-06-rome-030.jpg",
          orientation: "h",
          alt: "rape sculpture",
        },
      ]
    },
    {
      city: { city: 'Pisa', country: 'Italy', lat: 43.71592742727962, lng: 10.396407671416194 },
      images: [
        {
          path: "/images/pisa.jpg",
          orientation: "h",
          alt: "image",
          city: "Pisa"
        },
        {
          path: "/images/tower.jpg",
          orientation: "v",
          alt: "image",
          city: "Pisa"
        },
        {
          path: "/images/tower1.jpg",
          orientation: "v",
          alt: "image",
          city: "Pisa"
        }
      ]
    },

  ]

  const [center, setCenter] = useState(images[0].city)

  return (
    <div className="App">
      <Globe center={center} />

      {images.map((city, index1) => {
        return (
          <>
            <City key={index1} setCenter={setCenter} city={city.city} />
            <div
              key={index1}
              className={city.city}
              style={{
                display: "grid",
                margin: "0 auto 150px",
                maxWidth: "1400px",
                padding: "0 25px",
                gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                gap: "25px",
              }}>
              {city.images.map((img, index2) => {
                return (
                  <div
                    key={index1 + index2}
                    style={{
                      gridRowEnd: img.custom ? `span ${img.custom}` : (img.orientation == "h" ? "span 13" : "span 28"),
                    }}>
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                      src={process.env.PUBLIC_URL + img.path}
                      alt={img.alt} />
                  </div>
                )
              })}
            </div>
          </>
        )
      })}

    </div>
  );
}

export default App;

