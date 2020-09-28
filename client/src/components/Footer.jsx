import React, { Component } from 'react'
import {connect} from 'react-redux'
import {TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialYoutube} from "react-icons/ti";
import './Footer.css'
import {changeLanguage} from '../actions/index.js'


class Footer extends Component{


    handleLanguageClick = (event) => {
        const language = event.target.textContent;
        this.props.changeLanguage(language);
    }

    render(){
        return (
            <div className='footer'>
                <div className="language-selector-container">
                    <div className="lang-icon" onClick={this.handleLanguageClick}>arabic</div>
                    <div className="lang-icon" onClick={this.handleLanguageClick}>english</div>
                    <div className="lang-icon" onClick={this.handleLanguageClick}>french</div>
                </div>
                <div className="social-icons-container">
                    <a target="_blank" href='https://www.facebook.com'><TiSocialFacebook className='social-icon'/></a>
                    <a target="_blank" href='https://www.instagram.com'><TiSocialInstagram className='social-icon'/></a>
                    <a target="_blank" href='https://www.twitter.com'><TiSocialTwitter className='social-icon'/></a>
                    <a target="_blank" href='https://www.youtube.com'><TiSocialYoutube className='social-icon'/></a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { language: state.language }
  }
  
export default connect(mapStateToProps,{changeLanguage})(Footer);

