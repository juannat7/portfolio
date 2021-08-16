import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {work.description.map(function(description, index){return <p style={{'line-height': 20}}>{description.desc}</p>})}
            {work.links.map(function(link, index){return <a href={link.link} style={{marginRight: 20}} rel="noopener noreferrer" target="_blank">{link.desc}</a>})}
            <br/><br/><br/><br/>
        </div>
      })
      var pubs = this.props.data.pubs.map(function(pubs){
        return <div key={pubs.title}><h3>{pubs.title}</h3>
            <p className="info">{pubs.publication}</p>
            <p>{pubs.description}</p>
            {pubs.links.map(function(link, index){return <a href={link.link} style={{marginRight: 20}} rel="noopener noreferrer" target="_blank">{link.desc}</a>})}
            <br/><br/><br/><br/>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experiences</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row pubs">

         <div className="three columns header-col">
            <h1><span>Publications</span></h1>
         </div>

         <div className="nine columns main-col">
          {pubs}
        </div>
    </div>



      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
   </section>
    );
  }
}

export default Resume;
