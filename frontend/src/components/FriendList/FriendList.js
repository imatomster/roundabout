import React from 'react'
import {FaUserTie, FaSyncAlt} from 'react-icons/fa'
import './FriendList.css'

const FriendList = () => {
    return (        
        <div className="friendlist-container">
            <div className="table-head">
                <div className="title">
                    Friends
                </div>
                <FaUserTie className="man-in-tie"/>
            </div>
        </div>
    )
}

export default FriendList
