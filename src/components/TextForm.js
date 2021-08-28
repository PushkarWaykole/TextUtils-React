import React,{useState} from "react";


export default function TextForm(props) {

  

  const changeToUpper=()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }

  const changeToLower=()=>{
    console.log("Lower case was clicked");
    let newText=text.toLowerCase()
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  }

  const clearText=()=>{
    console.log("Clear text was clicked");
    let newText="";
    setText(newText);
    props.showAlert("Text cleared successfully","success")
  }

  const reverseTheText=()=>{
    let newText=text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed successfully","success")
  }

  const handleCopy=()=>{
    
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard successfully","success")
  }

  const handleOnChange=(event)=>{
    console.log("On change was clicked");
    setText(event.target.value)
    
  }

  const removeSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed spaces  successfully","success")
  }
  
  const[text,setText]=useState('');
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2 className="my-2 mb-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Type or paste your content here" style={{backgorundColor:props.mode==='dark'?'grey':'light'}}cursor="text" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
      </div>
      <div className="container my-5 " >
        
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={changeToUpper}>Convert To Upper Case</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={changeToLower}>Convert To Lower Case</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={reverseTheText}>Reverse the text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={clearText}>Clear</button>
      </div>

      <div className="container my-5" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>

      <div className="card text-dark bg-light mb-3" >
  <div className="card-header">Created By Pushkar Waykole</div>
  <div className="card-body">
    <h5 className="card-title">About Me</h5>
    <p className="card-text">This is a  project created by me.TextUtiles is a word counting and a character counting utility which can be used to manupulate your text in the way you want. </p>
  </div>
</div>
      
    </div>
  );
}
