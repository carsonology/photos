import './App.css';
import { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

function GlobeComponent(props) {
    const { data, center, setCenter } = props

    const [globeData, setGlobeData] = useState({
        countries: { features: [] },
    });

    useEffect(() => {
        globeEl.current.controls().enableZoom = false
        globeEl.current.controls().enablePan = false
        globeEl.current.controls().enableRotate = false
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {

                fetch(
                    "./geoData.json"
                )
                    .then((res) => res.json())
                    .then(function (res) {
                        setGlobeData({
                            countries: res[0],
                        });
                    });

            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        globeEl.current.pointOfView({ lat: center.lat, lng: center.lng, altitude: 2.5 }, 1000);
    }, [center]);

    const markerSvg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" /></svg>`;

    const gData = [{
        lat: center.lat,
        lng: center.lng,
    }];

    const globeEl = useRef();

    return (
        <div className="fixed">
            <div className="globe-container">
                <Globe
                    ref={globeEl}
                    width={225}
                    height={225}
                    backgroundColor="rgba(0,0,0,0)"
                    atmosphereColor='white'

                    polygonsData={globeData.countries.features}
                    polygonAltitude={0.01}
                    polygonSideColor={() => "transparent"}
                    polygonStrokeColor={() => "#A4B0BB"}
                    polygonCapColor={function ({ properties: d }) {
                        if (d.ADMIN == center.country) {
                            return 'red'
                        } else {
                            return 'white'
                        }
                    }}

                    htmlElementsData={gData}
                    htmlElement={() => {
                        const el = document.createElement('div');
                        el.innerHTML = markerSvg;
                        el.style.fill = 'white';
                        el.style.width = `3px`;
                        return el;
                    }}
                />
                <p className="cityLabel">{center.city}</p>
            </div>
            {/* <p>{center.city}</p> */}
            {/* {data.map((city) => {
                return <button onClick={() => setCenter(city)}>{city.city}</button>
            })} */}
        </div>
    );
}

export default GlobeComponent;
