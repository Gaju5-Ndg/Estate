import React from "react";
import "./Topbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaPlusCircle, FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
          src="data:image/png;base64,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"
           // src="https://homeradar.kwst.net/images/logo.png"
            className="logo"
          />
        </div>
        <div className="topCenter">
          <div className="d-flex">
            <div className="searchContainer">
              <FaSearch />
              <input type="text" placeholder="Search..." />
            </div>
            <div className="navigationMenus d-flex align-items-center">
              <div class="primary-navigation">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Work</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Web Development</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Illustration</a>
                      </li>
                      <li>
                        <a href="#">Iconography</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="topRight">
          <div className="border-start mx-2">
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
          <div className="topbarIconContainer border-start mx-2">
            {/* <NotificationsNone /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer border-start mx-2">
            {/* <Language /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer border-start mx-2">
            <a href="/dashboard/addNew" className="btn" style={{ backgroundColor: "#3270FC",padding:"10px" }}>
              <FaPlusCircle className="text-white mx-2" />
              <span className="text-white">Add Listing</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}