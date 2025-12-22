
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import $ from 'jquery';
import ShinyText from './ReactBits/ShinyText.jsx';
import GradientText from './ReactBits/GradientText.jsx';

function App() {
  function boDauChoThanhPho(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }
  
  const APP_ID = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
  const searchWeather = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${boDauChoThanhPho(cityName.trim())}&appid=${APP_ID}&units=metric&lang=vi`)
      .then(async res => {
        const data = await res.json();

        if (data.cod === 200) {
          const { name, main, weather } = data;
          $('.city-name').text(name);
          $('.weather-state').text(weather[0].description);
          $('.weather-temperature').text(`${main.temp.toFixed(1)}°C`);
          $('.sunrise').text(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
          $('.sunset').text(new Date(data.sys.sunset * 1000).toLocaleTimeString());
          $('.wind').text(`${data.wind.speed} km/h`);
          $('.humidity').text(`${main.humidity}%`);
          $('.weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        } else {
          alert('City not found');
        }
      });
  };

  useEffect(() => {
    $('#search-input').keypress(function (e) {
      if (e.which === 13) { 
        e.preventDefault();
        const cityName = e.target.value;
        if (cityName.trim()) {
          searchWeather(cityName);
        }
      }
    });

    $('.search-icon').click(function () {
      const cityName = $('#search-input').val();
      if (cityName.trim()) {
        searchWeather(cityName);
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-section">
          <div className="search-bar">
            <input type="text" name='search-city' id='search-input' />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          
            <GradientText ><p className='city-name'>Thành phố</p></GradientText>
          
          
          <ShinyText
            text="trạng thái"
            disabled={false}
            speed={3}
            className='weather-state'
          />
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className='weather-icon' />
          <p className="weather-temperature">°C</p>
        </div>
        <div className="additional-section">
          <div className="row">
            <div className="item">
              <div className="label">Mặt trời mọc</div>
              <div className="value sunrise">00:00:00 AM</div>
            </div>
            <div className="item">
              <div className="label">Mặt trời lặn</div>
              <div className="value sunset">00:00:00 AM</div>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <div className="label">Gió</div>
              <div className="value wind">0 km/h</div>
            </div>
            <div className="item">
              <div className="label">Độ ẩm</div>
              <div className="value humidity">0%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App