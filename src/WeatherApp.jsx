import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 30.32,
        humidity: 35,
        temp: 31.05,
        tempMax: 31.05,
        tempMin: 31.05,
        weather: "haze"
    });
    
    const [error, setError] = useState(null); // State for handling errors
    const [loading, setLoading] = useState(false); // State for handling loading

    let updateInfo = (newInfo, error = null) => {
        setWeatherInfo(newInfo);
        setError(error);
        setLoading(false); // Disable loading state once data is fetched
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} setLoading={setLoading}></SearchBox>
            {loading ? (
                <p>Loading weather information...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <InfoBox info={weatherInfo}></InfoBox>
            )}
        </div>
    );
}
