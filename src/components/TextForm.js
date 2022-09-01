import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
        document.title = 'Converted to uppercase';
    }

    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success")
        document.title = 'Converted to lowercase';
    }

    const handleClearClick =() =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared!","success")
        document.title = 'Text Cleared';
    }

    const handleCopy =() =>{
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard!","success")
        document.title = 'Copied';
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const [text , setText] = useState('');

  return (
    <>
    <div>
        <div className="container mb-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1 className='my-3 mb-4'>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white' , color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1 className='my-3 mb-4'>Your summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <h2 className='my-3 mb-4'>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
