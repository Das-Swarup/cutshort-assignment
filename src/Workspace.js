import React from 'react'
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";


export default function Workspace() {
    return (
        <div>
            <div className="welcome-container">
                <div className="welcome-body">
                    <h1>Let's set up home for all your work</h1>
                    <p>You can always create another workspace later.</p>
                </div>

                <div className="form">
                    <InputLabel className="form-title" shrink htmlFor="workspace-name">
                        Workspace Name
                    </InputLabel>
                    <TextField id="demo-helper-text-misaligned" label="Eden" />
                    <br /><br />
                    <InputLabel className="form-title" shrink htmlFor="url">
                        Workspace URL (optional)
                    </InputLabel>
                    <TextField id="demo-helper-text-misaligned" label="www.eden.com/example" />
                </div>
            </div>
        </div>
    )
}
