import React from 'react'
import CaseStudy from './CaseStudy'

function CaseStudies({nextSlideRef,}) {
    return (
        <div className="works__caseStudies" ref={nextSlideRef}>
            <CaseStudy id="1" name="Oboshor" type="Web Devlopment" />
            <CaseStudy id="2" name="BPA" type="Web Devlopment" />
            <CaseStudy id="3" name="Currency Helper" type="App Devlopment" />
            <CaseStudy id="4" name="Bingo" type="Game Devlopment" />
            <CaseStudy id="5" name="Call of Duty" type="Game Devlopment" />
        </div>
    )
}

export default CaseStudies
