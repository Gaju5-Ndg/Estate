import React, { useEffect } from "react";
import './smallCard.css';
import {IoLocationSharp} from 'react-icons/io5';

import {BsFillEyeFill} from 'react-icons/bs';
import { getAllListings } from "../components/addNew/creatSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsFillStarFill, BsPencil, BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const SmallCard = () => {
    const dispatch = useDispatch()
    const listings = useSelector((state)=>state.listings.listings)

    useEffect(()=>{
        getAllListings()
        console.log("On small card")
        dispatch(getAllListings())
    },[])
    console.log(listings)
    return(


<>
<div style={{display:"flex", flexWrap: "wrap"}}>

        {listings.map((item)=>{
            return (
                <div id="listing-card">
            <div id="listing-card-image" onMouseOver={()=>{
                document.getElementById("view-popup").style.display = "flex";
            }} onMouseOut={()=>{
                document.getElementById("view-popup").style.display ="none";
            }} 
             style={{
                background: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            
                
                }}>
                    {/*<button style={{backgroundColor:"blue",color:"white"}}>VIEW</button>*/}

                    <div id="view-pop">
                        <NavLink to={'/view'}>
                            <div id="view-listing-details" onClick={()=>{
                                localStorage.setItem("properties",JSON.stringfy(properties))
                                localStorage.setItem("cardsarry",JSON.stringfy(array))
                            }}>VIEW</div>
                        </NavLink>
                    </div>
                </div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    {item.description}
                </div>
                <div id="listing-card-address">
                    <IoLocationSharp style={{color:"#3270FC"}}/>
                   {item.location.province}
                </div>
                <div id="listing-card-rating">
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill/>
                    <BsTrash className="verified-delete" />
              <BsPencil className="verified-edit" />
                </div>

                
                <div id="listing-card-viewership">
                    <BsFillEyeFill style={{marginRight:5,color:"#3270FC"}}/>
                   
                    <span>Viewed - 645</span>

             
                </div>

               
            </div>
        </div>
            )
        })}


</div>
</>
    )
}
export default SmallCard