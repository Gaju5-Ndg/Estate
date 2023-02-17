import React from 'react'
import { CiUser } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import '../App.css';
//import { Popup } from "../screens/creat";

export default function NavBar() {
    return (
        <nav>
            <div>
                <h1 className='logo'>BLAIR OWENS</h1>
            </div>

                <ul className='nav-links'>
                    <li><NavLink to={'/'} > Our properties</NavLink></li>
                    <li><NavLink to={'/mls'} >  MLS Search</NavLink></li>
                    <li><NavLink to={'/communities'} > Communities</NavLink></li>
                    <li><NavLink to={'/news'} >  News</NavLink></li>
                    <li><NavLink to={'/Services'} >  Services</NavLink></li>
                    <li><NavLink to={'/contact'} >  About Blair</NavLink></li>
                    <li><NavLink to={'/contact'} >  Contact</NavLink></li>


                </ul>

            <div>
              <CiUser style={
                    {
                        fontSize: '2rem',
                    }
                }
                onClick={()=>{
                    document.getElementById("background").style.display = "flex";
                }}
               />
            </div>
        </nav>
    );

}