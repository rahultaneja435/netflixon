import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <img
            className="imager"
            src="https://static.wikia.nocookie.net/youtv/images/5/54/Netflix_logo.png/revision/latest?cb=20180527192151"
            alt="Netflix Logo"
            />

            <img
            className="profile"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar logo"
            />
        </div>
    )
}

export default Navbar
