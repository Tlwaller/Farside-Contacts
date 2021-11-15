import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div className="nav-tabs-container">
                <div className="nav-tab selected-tab">Home</div>
                <div className="nav-tab unselected-tab"><h4>End user</h4></div>
                <div className="nav-tab unselected-tab"><h4>Service queue</h4></div>
                <div className="nav-tab unselected-tab"><h4>Settings</h4></div>
            </div>
        </nav>
    )
}
