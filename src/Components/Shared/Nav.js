import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const location = useLocation();

    return (
        <nav>
            <div className="nav-tabs-container">
                <Link to="/" className={location.pathname === '/' ? 'nav-tab selected-tab' : 'nav-tab'}>Home</Link>
                <Link to="/user" className={location.pathname === '/user' ? 'nav-tab selected-tab' : 'nav-tab'}>End user</Link>
                <Link to="/queue" className={location.pathname === '/queue' ? 'nav-tab selected-tab' : 'nav-tab'}>Service queue</Link>
                <Link to="/settings" className={location.pathname === '/settings' ? 'nav-tab selected-tab' : 'nav-tab'}>Settings</Link>
            </div>
        </nav>
    )
}
