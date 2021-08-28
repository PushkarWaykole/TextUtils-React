import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);;

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}

        <Navbar title='TextUtiles' aboutText='About Me' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About mode={mode}/>
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm heading="Try TextUtiles - Word counter,Character counter,Remove extra spaces" showAlert={showAlert} mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
          

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
