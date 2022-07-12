class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.precipitation = document.getElementById('w-precipitation');
    this.wind = document.getElementById('w-wind');
    this.uv = document.getElementById('w-uv');
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_c} \u00B0C`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `${weather.current.humidity}`;
    this.precipitation.textContent = `${weather.current.precip_mm}`;
    this.feelsLike.textContent = `${weather.current.feelslike_c}`;
    this.wind.textContent = `${weather.current.wind_kph}`;
    this.uv.textContent = `${weather.current.uv}`;
  }
}
