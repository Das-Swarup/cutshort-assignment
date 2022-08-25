import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';

export default function Plan() {
    return (
        <div>
            <div className="welcome-container">
                <div className="welcome-body">
                    <h1>How are you planning to use Eden?</h1>
                    <p>We'll streamline your setup experience accordingly.</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <PersonIcon sx={{ color: "rgb(89, 53, 252)", fontSize: "35px" }} />
                        <h3>For myself</h3>
                        <p>Write better. Think more clearly. Stay organized.</p>
                    </div>
                    <div className="card">
                        <PeopleIcon sx={{ color: "rgb(89, 53, 252)", fontSize: "35px" }} />
                        <h3>With my team</h3>
                        <p>Wikis,docs,tasks & projects, all in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
