import "./App.css";
import Welcome from "./Welcome";
import Workspace from "./Workspace";
import { useState } from "react";
import Plan from "./Plan";
import LastPage from "./LastPage";
import SpaIcon from '@mui/icons-material/Spa';


function App() {
  
  const [page, setPage] = useState(0);
  const conditionalComponent=()=>{
    switch(page){
      case 0:
        return (
        <div className="progress-container">
        <h1><SpaIcon sx={{marginRight:"5px",color:"rgb(89, 53, 252)",fontSize:"25px"}}/>Eden</h1>
        <div className="progressbar">
        <span className='active'>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <div style={{width:"0%"}} className="line"></div>
      </div>
        <Welcome/>
        </div>
        );
      case 1:
        return (
          <div className="progress-container">
          <h1><SpaIcon sx={{marginRight:"5px",color:"rgb(89, 53, 252)",fontSize:"25px"}}/>Eden</h1>
          <div className="progressbar">
          <span className='active'>1</span>
          <span className="active">2</span>
          <span>3</span>
          <span>4</span>
          <div style={{width:"10%",marginRight:"200px"}} className="line"></div>
        </div>
          <Workspace/>
          </div>
          );
      case 2:
        return (
          <div className="progress-container">
          <h1><SpaIcon sx={{marginRight:"5px",color:"rgb(89, 53, 252)",fontSize:"25px"}}/>Eden</h1>
          <div className="progressbar">
          <span className='active'>1</span>
          <span className="active">2</span>
          <span className="active">3</span>
          <span>4</span>
          <div style={{width:"17%",marginRight:"60px"}} className="line"></div>
        </div>
          <Plan/>
          </div>
          );
      case 3:
        return (
          <div className="progress-container">
          <h1><SpaIcon sx={{marginRight:"5px",color:"rgb(89, 53, 252)",fontSize:"25px"}}/>Eden</h1>
          <div className="progressbar">
          <span className='active'>1</span>
          <span className="active">2</span>
          <span className="active">3</span>
          <span className="active">4</span>
          <div style={{width:"21%",marginRight:"30px"}} className="line"></div>
        </div>
          <LastPage/>
          </div>
          );
      default:
        return (
          <div className="progress-container">
          <h1>Eden</h1>
          <div className="progressbar">
          <span className='active'>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          
        </div>
          <Welcome/>
          </div>
          );
    }
  }

  function handleSubmit () {
    setPage(page + 1);
  }
  
  return (
    <div className="App">
      
      {conditionalComponent()}
      <button onClick={handleSubmit} className="btn-lg">{ page === 0 || page === 1 || page === 2  ? "Create Workspace" : "Launch Eden" }</button>
    </div>
  );
}

export default App;
