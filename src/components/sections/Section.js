import React from 'react'
import Person from '../Person/Person'
import './sections.css'

const Section = () => {
    return (
        <section className="section_first">
            <Person name='Ivan' age='22'/>
            <Person name='Kate' age='33'/>
            <Person name='Joseff' age='16'/>
        </section>
    )
}

export default Section