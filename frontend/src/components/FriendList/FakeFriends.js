import "./FriendList.css"
import React, { useState, Component } from "react";
import Geocode from "react-geocode"
import {FaCheckCircle, FaShieldAlt} from "react-icons/fa"

const FakeFriends = () => {


    const friends = [       
        "Dmytro Budym", 
        "Danila Fetisov",             
        "Rafael Cenzaro",
        "Siarhei Yakushevich",            
    ];
    
    return (
        <div>
            {friends.map(name => (
                <div className="friends">
                    {name}  
                    <div>
                        <FaCheckCircle id="omw"/>
                        <FaShieldAlt id="shield"/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default FakeFriends

