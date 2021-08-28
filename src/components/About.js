import React,{useState} from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'2px solid white'
    // })
    
    let myStyle = {
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
      

    }
    

    
    
  return (
    <div className="container" >
        <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtiles gives you a way to analyze your text quickly and efficiently.Be it word count ,character count ,time taken to read, etc. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtiles is a free character counter tool that provides live character count and word count statistics for a given text.TextUtiles reports the number of words and charactersThus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome,Firefox,Safari,Opera,Microsoft Edge.It suits to count characters in facebook,blog,books,excel,pdf document,essays,etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3 mx-2">
      <button type="button" onClick={toggleStyle}className="btn btn-dark">{btnText}</button>
      </div>  */}
    </div>
  );
}
