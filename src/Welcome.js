import React from 'react'
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import "./App.css"


export default function Welcome() {
  return (
    <div className="welcome-container">

      
      <div className="welcome-body">
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
      </div>

      <div className="form">
        <InputLabel  className="form-title" shrink htmlFor="full-name">
          Full Name
        </InputLabel>
        <TextField id="demo-helper-text-misaligned" label="Steve Jobs" />
        <br /><br />
        <InputLabel className="form-title" shrink htmlFor="display-name">
          Display Name
        </InputLabel>
        <TextField id="demo-helper-text-misaligned" label="Steve" />
      </div>
      
      </div>
  )
}
