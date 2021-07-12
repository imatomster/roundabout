import React from 'react'
import {FaUserTie, FaSyncAlt} from 'react-icons/fa'
import './FriendList.css'
import FakeFriends from './FakeFriends'

const FriendList = () => {
    return (        
        <div className="friendlist-container">
            <div className="table-head">
                <div className="title">
                    Friends
                </div>
                <FaUserTie className="man-in-tie"/>
            </div>
            <FakeFriends
            />

            <div>

            </div>
        </div>
    )
}

export default FriendList
