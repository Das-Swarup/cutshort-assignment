import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./App.css";

export default function LastPage() {
  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-body">
          <CheckCircleIcon
            sx={{ color: "rgb(89, 53, 252)", fontSize: "65px" }}
          />
          <h1>Congratulations, Eren!</h1>
          <p>You have completed the onboarding, you can start using Eden!</p>
        </div>
      </div>
    </div>
  );
}
