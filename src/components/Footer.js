import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"><a href="https://html5up.net/license">&copy;</a> Built By: <a href="https://github.com/HaoZeke/">Rohit Goswami.</a>&nbsp;<a href="https://github.com/HaoZeke/" className="icon fa-github"> <span className="label">GitHub</span></a>. Design Inspiration: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
