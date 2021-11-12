import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div className="nav-tabs-container">
                <div className="nav-tab">Home</div>
                <div className="nav-tab">Settings</div>
            </div>
        </nav>
    )
}
