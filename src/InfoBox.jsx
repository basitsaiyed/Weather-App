import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhemV8ZW58MHx8MHx8fDA%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1508843286231-c86bcf866a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1623200459352-ffcc6eb35fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D    ";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity> 80? RAIN_URL: info.temp>20?HOT_URL:COLD_URL}
                        title="Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity> 80? <ThunderstormIcon/>: info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature - { info.temp } &deg;C</p>
                        <p>Humidity - { info.humidity }</p>
                        <p>Min. Temp. - { info.tempMin } &deg;C</p>
                        <p>Max. Temp. - {info.tempMax} &deg;C</p>
                        <p>The Weather can be described as <i><b>{info.weather}</b></i> and feels like { info.feelsLike } &deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}