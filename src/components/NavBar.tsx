import { useState } from "react";
import "./NavBar.css";
import LeDebutLogo from "../assets/ledebut.svg";
import burger_menu from "../assets/hamburger.svg";
import Button from "./Button";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav id="nav">
      <div className="logo_wrapper">
        <img alt="ledebut logo" src={LeDebutLogo} />
      </div>
      <ul className={`${toggle ? "nav_links menu" : "nav_links"}`}>
        <div className="close_btn">
          <svg
            onClick={() => {
              setToggle(false);
            }}
            onKeyDown={() => {
              setToggle(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M25.3337 8.54675L23.4537 6.66675L16.0003 14.1201L8.54699 6.66675L6.66699 8.54675L14.1203 16.0001L6.66699 23.4534L8.54699 25.3334L16.0003 17.8801L23.4537 25.3334L25.3337 23.4534L17.8803 16.0001L25.3337 8.54675Z"
              fill="white"
            />
          </svg>
        </div>

        <li>
          <a href="#overview">OVERVIEW</a>
        </li>
        <li>
          <a href="#speakers">SPEAKERS</a>
        </li>
        <li>
          <a href="#reviews">REVIEWS</a>
        </li>
        <li>
          <a href="#faqs">FAQS</a>
        </li>
        <div className="menu_btn">
          <Button>GRAB YOUR SPOT</Button>
        </div>
      </ul>
      <div className="btn_wrapper">
        <Button>GRAB YOUR SPOT</Button>
      </div>
      <img
        className="hamburger"
        src={burger_menu}
        onClick={() => {
          setToggle(!toggle);
        }}
        onKeyDown={() => {
          setToggle(!toggle);
        }}
        alt=""
      />
      <div
        role="none"
        className={toggle ? "bg_overlay" : "bg_overlay overlay_closed"}
        onClick={() => {
          setToggle(false);
        }}
        onKeyDown={() => {
          setToggle(false);
        }}
      />
    </nav>
  );
}
