import React from 'react'
import TimeView from '../../components/time/TimeView'
import Goal from '../../components/goal/Goal'
import './viewpage.css'
import Weather from '../../components/weather/Weather'
const ViewPage = () => {
    return (
        <>
            <div className="landing-page-container">
            <div className="overlay ">
                <TimeView/>
                <Goal/>
                <Weather/>
            </div>
            </div>
        </>
    )
}

export default ViewPage