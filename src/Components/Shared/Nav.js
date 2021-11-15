import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div className="nav-tabs-container">
                <div className="nav-tab selected-tab">Home</div>
                <div className="nav-tab unselected-tab">Settings</div>
            </div>
        </nav>
    )
}
