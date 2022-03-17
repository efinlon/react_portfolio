import React, { Component } from 'react'
export default class Header extends Component {
  render () {
    return (
      <section id='portfolio' className='s-portfolio target-section'>
        <div className='row s-portfolio__header'>
          <div className='column large-12'>
            <h3>A Few Of My Latest Creations</h3>
          </div>
        </div>
        <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
          
          <div className='column folio-item'>
            <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-team-atlanta' className='folio-item__thumb'>
              <img
                src='images/twitter2.png'
                // srcSet='images/portfolio/droplet.jpg 1x, 
                //              images/portfolio/droplet@2x.jpg 2x'
                alt=''
              />
            </a>
          </div>{' '}
          
          {/* end folio-item */}
          <div className='column folio-item'>
            <a href='https://github.com/fasttrackd-student-work/spring-assignment-rest-efinlon' className='folio-item__thumb'>
              <img
                src='images/quiz2.png'
                // srcSet='images/portfolio/lamp.jpg 1x, 
                //              images/portfolio/lamp@2x.jpg 2x'
                alt=''
              />
            </a>
          </div>{' '}
          {/* end folio-item */}
          <div className='column folio-item'>
            <a href='https://github.com/fasttrackd-student-work/js-assessment-dev-duel-efinlon' className='folio-item__thumb'>
              <img
                src='images/github.png'
                // srcSet='images/portfolio/minimalismo.jpg 1x, 
                //              images/portfolio/minimalismo@2x.jpg 2x'
                alt=''
              />
            </a>
          </div>{' '}
          {/* end folio-item */}
          
        </div>{' '}
        {/* end folio-list */}
        {/* Modal Templates Popup
    =========================================================== */}
        <div id='modal-01' hidden>
          <div className='modal-popup'>
            <img src='images/twitter2.png' alt='' />
            <div className='modal-popup__desc'>
              <h5>Twitter</h5>
              <p>
                Designed and developed a RESTful web service that mimics the conceptual model of Twitter's API.
              </p>
              <ul className='modal-popup__cat'>
                <li>Spring Boot</li>
                <li>Java</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-team-atlanta' className='modal-popup__details'>
              Project link
            </a>
          </div>
        </div>{' '}
        {/* end modal */}
        <div id='modal-02' hidden>
          <div className='modal-popup'>
            <img src='images/quiz2.png' alt='' />
            <div className='modal-popup__desc'>
              <h5>QuizAPI</h5>
              <p>
                Built a command line application that uses vorpal.js to build quizzes and allows the user to
                take quizzes they have built or pull random questions from multiple quizzes and take a 
                random quiz. 
              </p>
              <ul className='modal-popup__cat'>
                <li>JavaScript</li>
              </ul>
            </div>
            <a href='https://github.com/fasttrackd-student-work/spring-assignment-rest-efinlon' className='modal-popup__details'>
              Project link
            </a>
          </div>
        </div>{' '}
        {/* end modal */}
        <div id='modal-03' hidden>
          <div className='modal-popup'>
            <img src='images/github.png' alt='' />
            <div className='modal-popup__desc'>
              <h5>Dev-Duel</h5>
              <p>
                Developed a small full-stack application that interfaces with GitHub's API to 
                aggregate, transform, and display a given user's profile and repository data. 
              </p>
              <ul className='modal-popup__cat'>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <a href='https://github.com/fasttrackd-student-work/js-assessment-dev-duel-efinlon' className='modal-popup__details'>
              Project link
            </a>
          </div>
        </div>{' '}
        {/* end modal */}
        
      </section>
    )
  }
}
