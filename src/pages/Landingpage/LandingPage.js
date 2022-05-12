import React, { useState } from 'react'
import './landingpage.css'
const LandingPage = () => {
    const [userName, setUserName] = useState("")
    return (
        <>
            <div className="landing-page-container">
                <div className="overlay">
                    <h1>Hellooooo, May I know your beautiful name ?</h1>
                    <input type="text" onChange={(e) => setUserName(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                localStorage.setItem("name", userName);
                                window.location.reload(false);
                            }
                        }}
                    />
                    {userName.length > 0 &&
                        <button onClick={() => {
                            localStorage.setItem("name", userName);
                            window.location.reload(false);
                        }}>
                            Lets go
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default LandingPage