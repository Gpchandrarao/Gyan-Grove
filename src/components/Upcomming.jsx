import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import "../styles/Upcomming.css";
const Upcomming = () => {
  const [upcommingData, setUpcommingData] = useState([]);
  const [upcommingImgs, setUpcommingImgs] = useState([]);

  useEffect(() => {
    getUpcommingData();
  }, []);

  const getUpcommingData = async () => {
    const api =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming";
    const res = await fetch(api);
    if (res.ok === true) {
      const data = await res.json();
      const allUpComming = await data.events;

      const upThambliImage = allUpComming.map((event) => {
        const imageUrl = event.imgUrl;
        const imgSpilt = imageUrl.split("/");
        const imgId = imgSpilt[imgSpilt.length - 2];
        return imgId;
      });
      setUpcommingData(allUpComming);
      setUpcommingImgs(upThambliImage);
      console.log(upThambliImage);
      console.log(upcommingData);
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
    <div className="upcomming-container">
      <ul className="ul-container-up">
        <h1 className="heading-upcomming">
          Upcomming <IoIosArrowRoundForward />
        </h1>
        <div className="ul-min">
          {upcommingData.map((eachUp, index) => (
            <li key={index} className="li-container-up">
              <img
                src={`https://drive.google.com/thumbnail?id=${upcommingImgs[index]}&sz=w1000}alt=`}
                className="img-up"
              />
              <div>
                <p>{formaateDate(eachUp.date)}</p>
              </div>
              <div>
                <FaLocationDot />
                <p>{eachUp.eventName}</p>
              </div>
              <div>
                <p>{eachUp.weather}|</p>
                <p>{disConvert(eachUp.distanceKm)}KM</p>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Upcomming;
