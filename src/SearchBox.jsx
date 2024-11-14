import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo, setLoading}) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            setLoading(true); // Start loading
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error('City not found');
            }

            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };

            console.log(result);
            updateInfo(result);
        } catch (error) {
            updateInfo({}, error.message);
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        if (city.trim() === "") {
            return;
        }
        console.log(city);
        setCity("");
        await getWeatherInfo();
    }

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}
