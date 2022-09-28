import React from 'react';

const API_endpoint = `https://api.openweathermap.org/data/2.5/onecall?`;
const API_key = `f864d85cf435deaa05c43a852d1d854c`

function geo() {
    const [latitude, setLatitude] = React.useState('');
    const [longtitude, setLongitude] = React.useState('');
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongtude(position.coords.longitude);
        })
    }, [])
    return (
        <div className='App'>

        </div>
    )
}

export default geo;