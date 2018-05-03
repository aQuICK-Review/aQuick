import React, { Component, PropTypes } from 'react'

import aquickIcon from '../images/icon.png'

const cb = () => {
  console.log('expired callback')
}

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="logo" src={aquickIcon} alt="Society (aQuICK) Logo" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>aQuICK</h1>
                <h4>Accessing Quantum Information & Computing Knowledgebase</h4>
                <p>A pan Indian initiative of global scope towards open and collaborative knowledge dissemination.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('articles')}}>Articles</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('sc')}}>Steering Committee</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('reg')}}>Registration</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
