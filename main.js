// http://api.weatherapi.com/v1/current.json?key=b153a08958264fc3b3e75413240506&q=London&aqi=yes

const btn = document.querySelector("#Search-btn");
const city = document.querySelector("#city-input");
const cityName = document.querySelector("#city-name");
const cityTime = document.querySelector("#city-tym");
const cityTemp = document.querySelector("#city-temp");

async function getData(CityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b153a08958264fc3b3e75413240506&q=${CityName}&aqi=yes`
  );

  return await response.json();
}

btn.addEventListener("click", async () => {
  const value = city.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});

// Reset button functionality
const btn2 = document.querySelector("#Reset-btn");
btn2.addEventListener("click", () => {
  city.value = "";
  cityName.innerText = "Name, Region - Country";
  cityTime.innerText = "Local Time";
  cityTemp.innerText = "Temprature";
});
