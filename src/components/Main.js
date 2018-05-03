import React from 'react'
import Link from 'gatsby-link'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import picdisec from '../images/xlargeDISEC.png'
import picunga from '../images/disecRoom.jpg'
import agendaPeace from '../images/peaceUN.png'
import agendaJeru from '../images/jeru.jpg'
import me from '../images/me.jpg'
import eb2 from '../images/eb2.jpg'
import eb3 from '../images/ebP.jpg'

var FontAwesome = require('react-fontawesome');

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="committee" className={`${this.props.article === 'committee' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">GA-DISEC</h2>
          <span className="image main"><img src={picdisec} alt="United Nations General Assembly " /></span>
          <h3>General Assembly</h3>
          <p>At the center of the UN system is the 193-member General Assembly (GA), comprised of seven
            main committees and various subsidiary and related bodies. The GA serves primarily as a forum
            for discussing general issues such as international peace and security and international
            collaboration in economic, social, cultural, educational, and health fields. The GA is also able to
            establish committees and other bodies to study and report on specific issues. Although the
            decisions of the GA have no binding legal force upon member-states, they do carry the weight of
            the moral authority of the world community.
          </p>
          <h3>DISEC [First Committee]</h3>
          <span className="image main"><img src={picunga} alt="The DISEC Meeting Room"/></span>
          <h4>History</h4>
            <p>Established to deal with the technological implications of the atomic bomb used against Japan and in
              development by every other major military power of the day, the General Assembly First Committee of
              1946 focused on all political and security questions of the General Assembly’s agenda. Along with the
              then-unnumbered Special Political Committee, the First Committee provided the stage for the liveliest
              debates between superpowers during the Cold War, centering on armament stockpiling and territorial
              balance between Soviet communism and Western capitalism.</p>
          <h4>Mandate</h4>
            <p>The First Committee deals with disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.</p>
            <p>It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations; the general principles of cooperation in the maintenance of international peace and security, as well as principles governing disarmament and the regulation of armaments; promotion of cooperative arrangements and measures aimed at strengthening stability through lower levels of armaments. </p>
          {close}
        </article>

        <article id="agendaTA" className={`${this.props.article === 'agendaTA' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Agenda Topic A</h2>
          <h3>Private Sector Participation in Peacekeeping Operations</h3>
          <span className="image main"><img src={agendaPeace} alt="Peacekeeper Logo" /></span>
            <p>The iconic blue emblem of the UN peacekeeping corps has been a beacon of hope since the inception of the United Nations. Disarmament and global prosperity often need a third party armed force to keep peace without being mired in local sentiments. To this end the UN peacekeeping corps have distinguished themseleves in the past. However, like all aspects of the UN, the soldiers are also on loan from various member nations.</p> 
            <p>The idea of using private military companies (“PMCs”) in UN peace operations gained traction in the mid-1990s, following the UN peacekeeping failures in Somalia and Rwanda, and the comparable peacekeeping successes of a PMC, Executive Outcomes, in Angola and Sierra Leone.</p>
            <p>Today, the UN is experiencing a surge in peace operations. There are 16 UN peace operations around the world with 122 countries contributing 123, 945 personnel. Qualitative and quantitative deficiencies are being exposed as poorly trained UN peacekeepers, restricted by shortages in manpower and equipment, struggle to fulfill their mandates, particularly in missions such as South Sudan and the Central African Republic.</p>
            <p>In light of the present scenario, it is imperative to clarify the role of the private sector in such crucial missions.</p>
          {close}
        </article>

        <article id="agendaTB" className={`${this.props.article === 'agendaTB' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Agenda Topic B</h2>
          <h3>Israel-Palestine Soveriegnity</h3>
          <span className="image main"><img src={agendaJeru} alt="Jerusalem" /></span>
            <p>The borders of Palestine and Israel has commanded the attention of the UN since the organization was founded. The UN General Assembly voted the original partition of the land in November 1947 and the UN deployed its first peacekeeping operation to monitor the ceasefire lines after the war of 1948.</p> 
            <p>Key issues that have plagued the stalled "peace process" include: Israel's occupation, Israeli settlements and settlement-building, the Israeli wall, security for Israelis and Palestinians, shared sovereignty over Jerusalem, and the right of return of 3.7 million stateless Palestinian refugees.</p>
            <p>The General Assembly has condemened several human rights violations in the past, however recent revelations by certain member states has once again brought the delicate balance into the focus of disruptive forces.</p>
            <p>The UN must quickly and decisively assert itself in this situation before the member nations get ahead of themselves and jeopardize the tenous peace in that region.</p>
          {close}
        </article>

        <article id="eb" className={`${this.props.article === 'eb' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Executive Board</h2>
          <div className="flexy">

          <div className="flexyCard">
            <div className="flexyContent">
              <h3>Rohit Goswami</h3>
              <img className="image contact" src={me} alt="Secretary General Rohit Goswami" />
              <h4>Secretary General</h4>
              <p>
                <a className="blank" href="https://github.com/HaoZeke/"><FontAwesome name='github' size='2x'/></a>
                &nbsp;&nbsp;
                <a className="blank" href="https://www.facebook.com/HaoZeke"><FontAwesome name='facebook-square' size='2x'/></a>
                &nbsp;&nbsp;
                <a className="blank" href="https://www.linkedin.com/in/rohit-goswami-513835a9"><FontAwesome name='linkedin ' size='2x'/></a>
              </p>
            </div>
          </div>

          <div className="flexyCard">
            <div className="flexyContent">
              <h3>Shaivya Anand</h3>
              <img className="image contact" src={eb2} alt="Chairperson" />
              <h4>Chairperson</h4>
              <p>
                <a className="blank" href="https://www.facebook.com/shaivya.anand"><FontAwesome name='facebook-square' size='2x'/></a>
                &nbsp;&nbsp;
                <a className="blank" href="https://www.linkedin.com/in/shaivya-anand-a60493104"><FontAwesome name='linkedin ' size='2x'/></a>
              </p>
            </div>
          </div>

          <div className="flexyCard">
            <div className="flexyContent">
              <h3>Pranjal Srivastava</h3>
              <img className="image contact" src={eb3} alt="Vice-Chairperson" />
              <h4>Vice Chairperson</h4>
              <p><a className="blank" href="https://www.facebook.com/pranjal1705"><FontAwesome name='facebook-square' size='2x'/></a></p>
            </div>
          </div>

          </div>
          {close}
        </article>

        <article id="reg" className={`${this.props.article === 'reg' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Registration</h2>
          <p> Follow the steps below <b>strictly</b>.</p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h2 className="vertical-timeline-element-title"><a href="https://trello.com/invite/b/J0koi0Zj/d7cfb945631185084eb0c4ba25656111/participant-path">Trello<FontAwesome name='trello'/></a></h2>
              <h4 className="vertical-timeline-element-subtitle">Step I</h4>
              <p>
                Click on the heading (Trello), and join the Participants Path board. You may sign in using Google for alacrity.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Country Selection <FontAwesome name='globe'/></h3>
              <h4 className="vertical-timeline-element-subtitle">Step II</h4>
              <p>
                Countries are being allotted on a first come first served basis. Choose a country of your choice (countries with confirmed delegates are flagged with a red confirmation tag) and leave a comment stating your branch, year and college (if not from HBTU). A moderator will confirm your choice ASAP.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Information Mining <FontAwesome name='desktop'/></h3>
              <h4 className="vertical-timeline-element-subtitle">Step III</h4>
              <p>
                Documents will be uploaded either on Trello itself or here on the website. Participants are advised to check both regularly for the study guide release and the rules.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Queries <FontAwesome name='question'/></h3>
              <h4 className="vertical-timeline-element-subtitle">Halp!</h4>
              <p>
                There is a list on Trello for delegates to ask their queries. You may also use the contact form. 
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="POST" action="https://formspree.io/hbtuMunBot@gmail.com">
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
            <li><a href="https://m.facebook.com/profile.php?id=1696447607068344&ref=content_filter" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://trello.com/invite/b/J0koi0Zj/d7cfb945631185084eb0c4ba25656111/participant-path" className="icon fa-trello"><span className="label">Trello</span></a></li>
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
