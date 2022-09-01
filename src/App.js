import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
  })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'Text-App: Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'Text-App: Light Mode';
    }
  }
  return (
    <>
      <Navbar title="Text-App" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mb-3">
       <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
