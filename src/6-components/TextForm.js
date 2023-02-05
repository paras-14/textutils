import React,{useState} from 'react'

export default function TextForm(props) {
  const toUpperCase=()=>{
    //  console.log("UpperCase was clicked"+ texa);
     let newText =texa.toUpperCase();
     setText(newText);
     props.showAlert("Converted To Upper case","success");
  }

  const toLowerCase=()=>{
    //  console.log("UpperCase was clicked"+ texa);
     let newText =texa.toLowerCase();
     setText(newText);
     props.showAlert("Converted To Lower case","success");

  }

  const clearText=()=>{
    setText('');
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange=(event)=>{
    //  console.log("on CHange");
     setText(event.target.value);
  }
  const [texa,setText]=useState('');
//   text="HIjihih" wrong wayy;
//   setText("hahhaha");

  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={texa} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={toUpperCase}>Convert To UpperCase </button>
            <button className="btn btn-primary mx-2 my-1" onClick={toLowerCase}>Convert To LowerCase </button>
            <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
        </div>
        
        <div className="container" my-3 style={{color:props.mode==='dark'?'white':'grey'}}>
            <h2>Your Text Summary</h2>
            <p>{texa.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {texa.length} characters</p>
            <p>you might Take {0.008*texa.split(" ").filter((elements)=>{return elements.length!==0}).length} minutes to read</p>
            <h1>Preview</h1>
            <p>{texa.length>0?texa:"Enter The Text Please"}</p>
        </div>

    </>
  )
}
 