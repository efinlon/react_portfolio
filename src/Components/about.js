import React, { Component } from 'react'
export default class about extends Component {
  render () {
    return (
      <section id='about' className='s-about target-section'>
        <div className='row'>
          <div className='column large-3 tab-12'>
            <img className='s-about__pic' src={process.env.PUBLIC_URL + '/images/Liz_Headshot.jpeg'} alt='' />
            <h3> Interests </h3>
            <p>Programming<br/>Brazilian Jiu Jitsu<br/>Botany<br/>Fostering Dogs<br/>Herbalism</p>
          </div>
          <div className='column large-9 tab-12 s-about__content'>
            <h3>About Me</h3>
            <p>
              Before becoming interested in software development, I earned a
              Master of Public Health in Environmental Health as well as a
              Bachelor of Interdisciplinary Studies in Environmental Science,
              both from Georgia State University. I initially learned to code in
              order to run statistical analyses on large public health datasets,
              but I soon realized that I enjoyed programming more than I did
              data science. Before entering the FastTrack program, I focused
              primarily on learning Python, R, and SQL. My main focus now is
              back-end development with Java, Javascript, and C#.
            </p>
            <hr />
            <div className='row s-about__content-bottom'>
              <div className='column w-1000-stack'>
                <h3>Contact Details</h3>
                <p>
                  Elizabeth Finlon <br />
                  Oakland, CA <br />
                  <a href='tel:4049063195'>404 906 3195</a> <br />
                  <a href='mailto:#0'>efinlon1@gmail.com</a> <br /> 
                  <a href='https://www.linkedin.com/in/elizabeth-finlon/'>LinkedIn</a>
                </p>
              </div>
              <div className='column w-1000-stack'>
                <a href={process.env.PUBLIC_URL + '/Finlon_2021.pdf'} className='btn btn--download' download='Finlon_Resume'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    style={{
                      fill: 'rgba(0, 0, 0, 1)',
                      transform: '',
                      msFilter: ''
                    }}
                  >
                    <path d='M12 16L16 11 13 11 13 4 11 4 11 11 8 11z' />
                    <path d='M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z' />
                  </svg>
                  
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>{' '}
        {/* end row */}
      </section>
    )
  }
}
