import "./main.css";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Badge from "react-bootstrap/Badge";
import {marked} from "marked";

function App() {



  const [markdown, setMarkdown] = useState("");

  const updateMarkdown = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  
  const markedContent = marked(markdown);


  return (
    


    <div className="App ">
      <div className="container ">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
              <div className="mark-input">
                <textarea className="input inputStyle" value={markdown} onChange={(e) => {updateMarkdown(e.target.value);}}> {console.log(markdown)} </textarea>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
              </h4>
            </div>

            <div className="outputStyle" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>


          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
