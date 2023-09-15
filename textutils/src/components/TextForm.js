import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick=()=>{
        let s = text.toUpperCase()
        setText(s)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        if(document.getElementById("myBox").value==="fuck" ||document.getElementById("myBox").value==="" ||document.getElementById("myBox").value==="")
        {props.ShowAlert("NOOOOOOO", "DANGER");
        setText("")}
        
    }
    const[text, setText] = useState("")
    const handleOnCopy=()=>{
        navigator.clipboard.writeText(text)
 
    }
    const handleOnSpaces=()=>{
        setText(text.split(/\s+/).join(" "))
    }
  




    return (
        <>
    <div className="container">
    <div id="m" className="mb-3">
  <textarea value={text} placeholder="Leave a comment here" id="myBox" onChange={handleOnChange}></textarea>
</div>
      <button id="upr" type="Submit" className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
      <button id="upr1" type="Submit" className="btn btn-primary" onClick={handleOnCopy} >COPY</button>
      <button id="upr2" type="Submit" className="btn btn-primary" onClick={handleOnSpaces} >Remove Extra Spaces</button>
<div className="container my-2" >
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element !==""}).length} Words, {text.split("").filter((element)=>{if(element !==" " && element !=="\n"){return element} return null }).length} Chars</p>
    <h2>Preview</h2>
    {text}    
</div>
</div>
</>
  );
    }
