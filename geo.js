import React from 'react';
import axios from 'axios';
import { response } from 'express';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `f864d85cf435deaa05c43a852d1d854c`

function geo() {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');
    const [responseData, setResponseData] = React.useState({})
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        // console.log(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly, daily&appid=${API_key}`)
        let finalAPIEndPoint =`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
        // console.log(finalAPIEndPoint)
        axios.get(finalAPIEndPoint)
        .then((response) => {
            console.log(response.data)
        })

    }, [])
    return (
        <div className='App'>
            <h1>{responseData.name}</h1>
        </div>
    )
}

export default geo;