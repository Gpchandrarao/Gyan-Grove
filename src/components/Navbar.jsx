import "../styles/Navbar.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [activeColor, setActiveColor] = useState(0);
  return (
    <nav className="nav-container">
      <div className="starting">
        <FaLocationDot className="location-icon" />
        <p className="location">Mumbai, india</p>
        <IoIosArrowForward />
      </div>
      <ul className="ending">
        <li
          className={`${activeColor === 1 ? "active" : ""}`}
          onClick={() => setActiveColor(1)}
        >
          Live shows
        </li>
        <li
          className={`${activeColor === 2 ? "active" : ""}`}
          onClick={() => setActiveColor(2)}
        >
          streams
        </li>
        <li
          className={`${activeColor === 3 ? "active" : ""}`}
          onClick={() => setActiveColor(3)}
        >
          Movies
        </li>
        <li
          className={`${activeColor === 4 ? "active" : ""}`}
          onClick={() => setActiveColor(4)}
        >
          Plays
        </li>
        <li
          className={`${activeColor === 0 ? "active" : ""}`}
          onClick={() => setActiveColor(0)}
        >
          Events
        </li>
        <li
          className={`${activeColor === 5 ? "active" : ""}`}
          onClick={() => setActiveColor(5)}
        >
          Sports
        </li>
        <li
          className={`${activeColor === 6 ? "active" : ""}`}
          onClick={() => setActiveColor(6)}
        >
          Activites
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
