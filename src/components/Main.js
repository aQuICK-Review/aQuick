import React from 'react'
import Link from 'gatsby-link'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import future from '../images/futureStuff.png'
import dgoswami from '../images/dgoswami.png'
import sc2 from '../images/akpati.jpg'
import sc3 from '../images/pkp.jpg'

var FontAwesome = require('react-fontawesome');

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

          <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Open Invitation</h2>
          <p>
              On the last day of our conglomeration together at <a href="https://www.iiserb.ac.in/">IISER Bhopal</a>, we three old-timers: <a href="http://www.hri.res.in/~akpati/">Arun Pati</a>, <a href="http://www.iiserkol.ac.in/people/faculty/dps/pprasanta">Prasanth Panigrahi</a> & myself <a href="http://home.iitk.ac.in/~dgoswami/">(Debu Goswami)</a>, while reflecting our take on the journey of Quantum Information & Computing in India over the past couple of decades, thought that it is about time that we must form a coherent body (irrespective of  funding issues) that would enable and guide forward the efforts of quantum education. We note the efforts in terms of <a href="http://nptel.ac.in/">NPTEL Lectures</a> and global forums for exchanging ideas on the Interactions and involvements in Virtual Space for Quantum Information & Computing but feel the need for a more decentralized democratic approach to quality education and musings.
          </p>
          <p>
              With these in mind, we thought of creating a web-based group aQuICK: Accessing Quantum Information & Computing Knowledgebase.
          </p>
          <p>
              This effort is envisaged to ensure the following:</p>
              <ul>
                  <li>First class open source web support for articles</li>
                  <li>Transparent and open avenues of discussion</li>
                  <li>Cross medium article generation (web, pdf, data etc)</li>
                  <li>Resource listings</li>
              </ul>
          {close}
        </article>


        <article id="articles" className={`${this.props.article === 'articles' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Articles</h2>
        <span className="image main"><img src={future} alt="Placeholder Image" /></span>
        <h3>Coming Soon</h3>
        <h4>Scope</h4>
        <p> The articles are to be mainly educational in nature, expositions and cross posts to <a href="https://arxiv.org/">arxiv</a> (to be automated on request) are encouraged.</p>
        <h4>Quality</h4>
        <p>  Peer review and continous improvement as well as verifiable data will be mandatory. Older articles are to be archived if not mantained. </p>
        {close}
        </article>



        <article id="sc" className={`${this.props.article === 'sc' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Steering Committee</h2>
          <div className="flexy">

          <div className="flexyCard">
            <div className="flexyContent">
                <p></p>
              <h3>Debabrata Goswami</h3>
              <p>
                 <img className="image contact" src={dgoswami} alt="Prof. Debabrata Goswami" />
              </p>
              <h4>Professor</h4>
              <h4> IIT Kanpur</h4>
              <p>
                  <a className="blank" href="http://home.iitk.ac.in/~dgoswami/"><FontAwesome name='globe' size='2x'/></a>
                &nbsp;&nbsp;
        <a className="blank" href="https://in.linkedin.com/in/debabrata-goswami-a453014"><FontAwesome name='linkedin ' size='2x'/></a>
              </p>
            </div>
          </div>

          <div className="flexyCard">
            <div className="flexyContent">
                <p></p>
                <h3>Prasanta Kumar Panigrahi</h3>
              <p>
                 <img className="image contact" src={sc3} alt="Prof. Panigrahi" />
              </p>
              <h4>Professor</h4>
              <h4> IISER Kolkata </h4>
              <p>
                  <a className="blank" href="http://www.iiserkol.ac.in/people/faculty/dps/pprasanta"><FontAwesome name='globe' size='2x'/></a>
                &nbsp;&nbsp;
        <a className="blank" href="https://in.linkedin.com/in/prasanta-panigrahi-a2276457"><FontAwesome name='linkedin ' size='2x'/></a>
              </p>
            </div>
          </div>

        <div className="flexyCard">
            <div className="flexyContent">
                <p></p>
                <h3>Arun Kumar Pati</h3>
                <p>
                    <img className="image contact" src={sc2} alt="Prof. Pati" />
                </p>
                <h4>Professor (H)</h4>
                <h4>HRI Allahabad</h4>
                <p>
                    <a className="blank" href="http://www.hri.res.in/~akpati/"><FontAwesome name='globe' size='2x'/></a>
        </p>
            </div>
        </div>

          </div>
          {close}
        </article>

        <article id="reg" className={`${this.props.article === 'reg' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Registration</h2>
          <p> Follow the steps below to <b>join</b>.</p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h2 className="vertical-timeline-element-title"><a href="https://trello.com/invite/b/PCrPL8ot/5bd101f117432e1a5013d6e43b62da1a/community">Trello<FontAwesome name='trello'/></a></h2>
              <h4 className="vertical-timeline-element-subtitle">Step I</h4>
              <p>
                  Click on the heading (Trello), and join the Community board. You may sign in using Google for alacrity.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Introduction<FontAwesome name='globe'/></h3>
              <h4 className="vertical-timeline-element-subtitle">Step II</h4>
              <p>
                  Mention your interests and your expertise, as well as possible articles.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Future Directions<FontAwesome name='desktop'/></h3>
              <h4 className="vertical-timeline-element-subtitle">Step III</h4>
              <p>The current Trello board is meant to be a whiteboard for ideas as well as for requests. To this end, kindly engage actively via Trello or pull requests on Github.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Queries <FontAwesome name='question'/></h3>
              <h4 className="vertical-timeline-element-subtitle">Halp!</h4>
              <p>
                There is a list on Trello for community members to ask their queries. You may also use the contact form.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="POST" action="https://formspree.io/admin@aquick.review">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
              <li><a href="https://trello.com/invite/b/PCrPL8ot/5bd101f117432e1a5013d6e43b62da1a/community" className="icon fa-trello"><span className="label">Trello</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
