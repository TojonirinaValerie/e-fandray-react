import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebarStyles.css';

interface SidebarProps {
    
}
 
const Sidebar: React.FC<SidebarProps> = () => {
    return ( 
        <div className="sidebar">
            <NavLink exact to="/" className="nav" activeClassName="activeNav">
                <i className="fas fa-home"></i>
            </NavLink>
            <NavLink to="/messages/" className="nav" activeClassName="activeNav">
                <i className="fas fa-comment-dots"></i>
            </NavLink>
            {/*
            
            <NavLink exact to="/profils/" className="nav" activeClassName="activeNav">
                <i className="fas fa-user"></i>
            </NavLink>
            <NavLink exact to="/connexion/" className="nav" activeClassName="activeNav">
                <i className="fas fa-sign-out-alt"></i>
            </NavLink>
            */ }
        </div>
     );
}
 
export default Sidebar;