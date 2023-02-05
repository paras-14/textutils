
import './App.css';
import Navbar from "./6-components/Navbar"
import Form from "./6-components/TextForm"
import About from "./6-components/About"
import React,{useState} from "react"
import Alert from "./6-components/Alert"
import {
  BrowserRouter,
  Route,
  Routes,
  // Link,
} from "react-router-dom";








function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type,
     })

     setTimeout(()=>{
        setAlert(null);
     },3000)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const enableDarkMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#40484e'
      showAlert("Dark Mode has Been Enabled","success");
      document.title="Light Mode Enabled";
      setInterval(() => {
        document.title="Textutils Is Amazing"
      }, 2000);
      setInterval(() => {
        document.title="Awesome Textutils"
      }, 1500);
    }
    else{
      setmode('light') 
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has Been Enabled","success");
      document.title="Dark Mode Enabled";
    }
  }


  return (
    <>
    <BrowserRouter>
      <Navbar
        mode={mode} 
        toggleMode={enableDarkMode}
        title="TextUtils"
        aboutText="About"
      />
       
       <Alert
        alert={alert}
       />

      <div className="container" my-3>
         <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Form heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>

           {/* <Form
             showAlert={showAlert}
             heading="Enter Your Text Here"
             mode={mode}
          />   */}

          
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
 

            