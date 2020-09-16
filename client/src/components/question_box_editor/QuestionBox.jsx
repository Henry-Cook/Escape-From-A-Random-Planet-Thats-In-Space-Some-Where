import React from "react";
import AceEditor from "react-ace";
import { Button } from "react-bootstrap";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";

const val =
  "const hey = () => {Console.log('YO Mama is a hoe'); const hey = () => {Console.log('YO Mama is a hoe')}";

export default function QuestionBox(props) {
  const [code, setCode] = useState(val);

  function onChange(newValue) {
    setCode(newValue);
  }

  function onSubmit() {
    console.log(eval(code));
  }
  return (
    <>
      <div>
        <h1>Questions Here</h1>
      </div>
      <div className="editor">
        <AceEditor
          mode="javascript"
          onChange={onChange}
          value={code}
          theme="monokai"
          name="editor"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            tabSize: 2,
            wrap: true,
          }}
        />
        <Button variant="info" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}
