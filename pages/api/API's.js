import axios from "axios";

export const getPricesByIsoCode = async () => {
  const { data } = await axios(
    "https://api.freecurrencyapi.com/v1/latest?apikey=YVU5ydorFyvgKZu58L111W0sW35qILvwbNUcWTIA"
  );
  return data;
};

export const getWeatherByLocation = async (location = "tehran") => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  );
  return data;
};
