import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() {
        return (
            <nav id='nav-bar'>
                <div id="logo">
                    <Link to="/">DailyAlert</Link>
                </div>
                <div id="nav-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/">General</Link></li>
                        <li><Link to="/science">Science</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <div id="searchBar">
                        <input type="text" id='searchTextBox' placeholder='Search here' />
                        <button type='button' id="searchBtn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </div>
                <div id="hamburger" onClick={this.handleOnClick}><FontAwesomeIcon icon={faBars} /></div>

            </nav>
        )
    }
}

export default NavBar;