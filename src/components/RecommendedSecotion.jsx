import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";

import "../styles/RecommendedSecotion.css";

const RecommendedSecotion = () => {
  const [recommendData, setRecommendData] = useState([]);
  const [thambline, setThambline] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const recommendApi =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const res = await fetch(recommendApi);
    if (res.ok === true) {
      const data = await res.json();
      const allEvents = await data.events;

      const thamblineImg = allEvents.map((event) => {
        const imageUrl = event.imgUrl;
        const imgSpilt = imageUrl.split("/");
        const imgId = imgSpilt[imgSpilt.length - 2];
        return imgId;
      });

      setRecommendData(allEvents);
      setThambline(thamblineImg);
    }
  };

  const disConvert = (dis) => {
    return (dis / 1000).toFixed(2);
  };

  const formaateDate = (dateS) => {
    const date = new Date(dateS);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="RecommendedSecotion-container">
      <h1 className="recommend-heading">
        Recommended Shows <IoIosArrowRoundForward />
      </h1>
      <ul className="ul-container">
        <Slider {...settings}>
          {recommendData.map((eachData, index) => (
            <li key={index} className="li-container">
              <img
                src={`https://drive.google.com/thumbnail?id=${thambline[index]}&sz=w1000`}
                alt={`event${index}`}
                className="thm-img"
              />
              <div className="cityName-eventdata">
                <div className="event-name-container">
                  <p className="even-name">{eachData.eventName}</p>
                  <p>{formaateDate(eachData.date)}</p>
                </div>
                <div className="location-dis-container">
                  <div className="loaction-container">
                    <FaLocationDot className="" />
                    <p className="city-name">{eachData.cityName}</p>
                  </div>
                  <div className="dis-container">
                    <p>{eachData.weather}|</p>
                    <p>{disConvert(eachData.distanceKm)}KM</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default RecommendedSecotion;
