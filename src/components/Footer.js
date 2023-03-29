import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
class Footer extends React.Component{
    render(){
        return(
            <footer id="footItem">
                <div id="footmenu">
                    <div id="categories">
                        <h5>Categories</h5>
                        <p>General</p>
                        <p>Sports</p>
                        <p>Entertainment</p>
                        <p>Health</p>
                        <p>Technology</p>
                        <p>Business</p>
                        <p>Science</p>
                    </div>
                    <div id="contactInfo">
                        <h5>Contact</h5>
                        <p>Email: dailyalert@gmial.com</p>
                        <p>Tel no: 07112939493</p>
                        <p>Contact no: 9146609969</p>
                    </div>
                    <div id="socialM">
                        <h5>Social Media</h5>
                        <FontAwesomeIcon id='facebook' className='icon' icon={faFacebook}/>
                        <FontAwesomeIcon id='instagram' className='icon' icon={faInstagram}/>
                        <FontAwesomeIcon id='whatsapp' className='icon' icon={faWhatsapp}/>
                        <FontAwesomeIcon id='twitter' className='icon' icon={faTwitter}/>
                    </div>
                </div>
                <p id='footerStrip'>Copyright &copy; 2023 www.dailyalert.com</p>
            </footer>
        )
    }
}

export default Footer;