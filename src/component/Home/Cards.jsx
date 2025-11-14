import { useEffect, useState } from "react";

const Cards = (props) => {
  const [weather, setWeather] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=a480446efe933b1c0c3cc2c154346ad9"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="flex gap-2 sm:gap-5 mb-5 mt-5 sm:flex-wrap">
      <div className="p-2 sm:py-5 sm:px-10 border bg-[#8272DA] rounded-md text-center flex-grow">
        <h2 className="text-lg sm:text-2xl font-bold font-serif">
          {weather.main ? (weather.main?.temp - 273.15).toFixed(1) + "°C" : ""}
        </h2>
        <p className="text-white font-medium">{weather.name}</p>
      </div>
      <div className="p-2 sm:py-5 m:px-10 border bg-[#FD6663] rounded-md text-center flex-grow">
        <h2 className="text-lg sm:text-2xl font-bold font-serif">
          {formattedDate}
        </h2>
        <p className="text-white font-medium">{formattedTime}</p>
      </div>
      <div className="p-2 sm:py-5 sm:px-10 border bg-[#FCA201] rounded-md text-center flex-grow">
        <h2 className="text-lg sm:text-2xl font-bold font-serif">
          Build Using
        </h2>
        <p className="text-white font-medium">React</p>
      </div>
    </div>
  );
};

export default Cards;
