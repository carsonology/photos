import './App.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'


function City(props) {
    const { setCenter, city } = props

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px',
        threshold: 0.5
    });

    useEffect(() => {
        setCenter(city)
    }, [inView])

    return (
        <div ref={ref}>
            <h1 >{city.city}</h1>
        </div>
    );
}

export default City;

