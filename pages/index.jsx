import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assests/images/logo.png";
import search from "../assests/images/search.png";
import mic from "../assests/images/mic.png";
import dots from "../assests/svg/dots.svg";
import reactDom from "react-dom";
// import { useState } from "react";
// import Image from 'next/image'

export default function Home() {
  const [hoverClass, setHoverClass] = useState("");
  const [focus, setFocus] = useState(false);

  // dont know why but i saw strange behaviour of onHover pseudo class
  // the onhover was not getting triggered on the hover of search-box instead on the hover of 
  // each child of search-box div and the box-shadow was not not been applied to the search-box
  // instead to all the children elements sepeartly but WHy ????

  return (
    <div className="body-wrapper">
      <header className="header">
        <ul>
          <li>Gmail</li>
          <li>Images</li>
          <li className="dots">
            <Image src={dots} />
          </li>
          <li className="profile">Y </li>
        </ul>
      </header>
      <div className="middle-banner">
        <div className="content">
          <div className="logo-banner">
            <div className="logo">
              <Image src={logo} />
            </div>
          </div>
          <div
            className={`search-box ${hoverClass}`}
            onMouseOver={() => {
              setHoverClass("search-hover");
            }}
            onMouseOut={() => {
              if (!focus) {
                setHoverClass("");
              }
            }}
          >
            <div className="search-icon">
              <Image src={search} />
            </div>
            <input
              type="text"
              className="search-input"
              onFocus={() => {
                setFocus(true);
                setHoverClass("search-hover");
              }}
              onBlur={() => {
                setFocus(false);
                setHoverClass("");
              }}
            />
            <div className="voice-icon">
              <Image src={mic} />
            </div>
          </div>

          <div className="buttons-wrapper">
            <div className="buttons-box">
              <div className="button-text-box">
                {" "}
                <a href="#">Google Search</a>{" "}
              </div>
              <div className="button-text-box">
                {" "}
                <a href="#">I'm Feeling Lucky</a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-box">
          <ul>
            <li>
              <a href="#">India</a>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">
                <pre>How Search Works</pre>
              </a>
            </li>
          </ul>
          <ul className="footer-box-end">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
