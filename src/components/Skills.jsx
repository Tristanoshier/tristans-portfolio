import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="skills" className="skills">
            <div data-aos="fade-up" className="skills-title">Skills</div>
         
        </div>
    )
}
