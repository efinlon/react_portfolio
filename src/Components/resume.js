import React, { Component } from 'react'
export default class Resume extends Component {
  render () {
    return (
      <section id='resume' className='s-resume target-section'>
        <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>Career</h3>
          </div>
          <div className='column large-9 tab-12'>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Cook Systems, Inc.</h4>
                <p className='resume-block__header-meta'>
                  <span>Software Developer</span>
                  <span className='resume-block__header-date'>
                    May 2021 - Present
                  </span>
                </p>
              </div>
              <p>
                Software Developer at Cook Systems, Inc. on assignment at RSM US
                LLP
              </p>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Highwire Coffee Roasters</h4>
                <p className='resume-block__header-meta'>
                  <span>Educational Director</span>
                  <span className='resume-block__header-date'>
                    August 2019 - February 2021
                  </span>
                </p>
              </div>
              <p>
                Created & implemented employee education protocol
                <br />
                Performed company-wide QA/QC <br />
                Facilitated hiring & onboarding of new employees
                <br />
                Utilized extensive customer service experience in day-to-day
                workflow
              </p>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Georgia State University</h4>
                <p className='resume-block__header-meta'>
                  <span>Graduate Research Assistant</span>
                  <span className='resume-block__header-date'>
                    August 2015 - August 2017
                  </span>
                </p>
              </div>
              <p>
                Implemented R, Python, SAS, and Excel-based data analytics
                <br />
                Performed meta-analyses on peer-reviewed publications
                <br />
                Conducted lab analyses & designed data-collection procedures
                <br />
                Trained volunteers in data collection
              </p>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Environmental Protection Agency</h4>
                <p className='resume-block__header-meta'>
                  <span>Graduate Intern</span>
                  <span className='resume-block__header-date'>
                    January 2017 - July 2017
                  </span>
                </p>
              </div>
              <p>
                Calculated risk assessments for federal reports
                <br />
                Drafted copy to communicate health risks with public
                <br />
                Maintained databases of multiple federal Superfund sites
                <br />
                Managed data & organized spreadsheets for large,
                multi-departmental projects
              </p>
            </div>{' '}
            {/* end resume-block */}
          </div>
        </div>{' '}
        {/* s-resume__section */}
        <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>Education</h3>
          </div>
          <div className='column large-9 tab-12'>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Cook Systems, Inc. FastTrack</h4>
                <p className='resume-block__header-meta'>
                  <span>Software Development Training Program</span>
                  <span className='resume-block__header-date'>May 2021</span>
                </p>
              </div>
              <p>
                Concentrated Java Frameworks and Developer Tools Training
                <br />
                Java, JavaScript, Spring, React, HTML, CSS
              </p>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>University of Michigan</h4>
                <p className='resume-block__header-meta'>
                  <span>Python for Everybody Specialization</span>
                  <span className='resume-block__header-date'>
                    December 2020
                  </span>
                </p>
              </div>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Georgia State University</h4>
                <p className='resume-block__header-meta'>
                  <span>Master of Public Health</span>
                  <span className='resume-block__header-date'>May 2018</span>
                </p>
              </div>
              <p>
                Graduate Research Assistantship
                <br />
                GPA 3.85
              </p>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Georgia State University</h4>
                <p className='resume-block__header-meta'>
                  <span>B.I.S. in Environmental Science</span>
                  <span className='resume-block__header-date'>
                    December 2012
                  </span>
                </p>
              </div>
              <p>GPA 3.91; Summa Cum Laude; Departmental Distinctions</p>
            </div>{' '}
            {/* end resume-block */}
          </div>
        </div>{' '}
        {/* s-resume__section */}
        <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>Skills</h3>
          </div>
          <div className='column large-9 tab-12'>
            <div className='resume-block'>
              <p>
                I am proficient coding in Python, Java, Javascript, R, and SQL.
                I have experience creating web applications using HTML, CSS, as
                well as frameworks like React, Spring, and Hibernate. I have
                academic research experience that includes performing complex
                statistical analyses, conducting risk assessments, performing
                lab analyses, and writing technical reports.
              </p>
              <ul className='skill-bars-fat'>
                <li>
                  <div className='progress percent85' />
                  <strong>Java</strong>
                </li>
                <li>
                  <div className='progress percent85' />
                  <strong>Python</strong>
                </li>
                <li>
                  <div className='progress percent65' />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className='progress percent90' />
                  <strong>SQL</strong>
                </li>
                <li>
                  <div className='progress percent50' />
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className='progress percent50' />
                  <strong>CSS</strong>
                </li>
              </ul>
            </div>{' '}
            {/* end resume-block */}
          </div>
        </div>{' '}
        {/* s-resume__section */}
      </section>
    )
  }
}
