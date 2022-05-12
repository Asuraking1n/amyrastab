import React from 'react'
import TimeView from '../../components/time/TimeView'
import Goal from '../../components/goal/Goal'
import './viewpage.css'
const ViewPage = () => {
    return (
        <>
            <div className="landing-page-container">
            <div className="overlay">
                <TimeView/>
                <Goal/>
            </div>
            </div>
        </>
    )
}

export default ViewPage