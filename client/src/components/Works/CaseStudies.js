import React from 'react'
import CaseStudy from './CaseStudy'

function CaseStudies({nextSlideRef}) {
    return (
        <div className="works__caseStudies" ref={nextSlideRef}>
            <CaseStudy id="1" />
            <CaseStudy id="2" />
            <CaseStudy id="3" />
        </div>
    )
}

export default CaseStudies
