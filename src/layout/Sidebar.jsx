import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FiTrendingUp,
  FiCalendar,
  FiFilePlus,
  FiList,
  FiMail,
  FiMessageSquare,
  FiPlus,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Main</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <NavLink to={"/dashboard/board"} className="py-0">

              <FiTrendingUp className="sidebarIcon" />
              Dashboard
              </NavLink>
            </li>
            
            <li className="sidebarListItem border-bottom">
            <NavLink>
              <FiUserPlus className="sidebarIcon" />
              Edit Profile
              </NavLink>
            </li>
            
            <li className="sidebarListItem border-bottom">
              <NavLink>
              <FiMail className="sidebarIcon" />
              Messages
              <span> 3 </span>
              </NavLink>
            </li>
            <li className="sidebarListItem border-bottom">
              <NavLink>
              <FiUsers className="sidebarIcon" />
              Agents List
              </NavLink>
            </li>
            <li className="sidebarListItem border-bottom">
              <NavLink>
              <FiPlus className="sidebarIcon" />
              Submenu
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Listings</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem border-bottom">
              
              <NavLink to={"/dashboard/listing"}>
              <FiList className="sidebarIcon" />
              My listings
              </NavLink>
            </li>
            <li className="sidebarListItem border-bottom">
              <NavLink>
              <FiCalendar className="sidebarIcon" />
              Bookings
              </NavLink>
            </li>
            <li className="sidebarListItem border-bottom">
              <NavLink>
              <FiMessageSquare className="sidebarIcon" />
              Reviews
              <span>2</span>
              </NavLink>
            </li>
            
            <li className="sidebarListItem border-bottom">
            <NavLink to={"/dashboard/addNew"} className="py-0"> 
              <FiFilePlus className="sidebarIcon" />
              Add New
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}