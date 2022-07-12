class Weather {
  constructor(city, country) {
    this.key = '4cba16c0bf694135a30182646221207';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city}&country=${this.country}&aqi=no`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeWeatherLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
