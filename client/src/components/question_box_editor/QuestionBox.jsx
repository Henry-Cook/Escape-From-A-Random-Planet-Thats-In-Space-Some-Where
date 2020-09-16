import React from "react";
import AceEditor from "react-ace";
import { Button, Spinner } from "react-bootstrap";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";

export default function QuestionBox(props) {
  const [code, setCode] = useState("");
  const [start, setStart] = useState(null);
  const [questionsState, setQuestionsState] = useState("");
  const [continueGame, setContinueGame] = useState(true);

  const { questions } = props;

  return (
    <>
      <div>
        <h1>Questions Here</h1>
      </div>
      <div className="editor">
        {!props.questions && <Spinner animation="border" />}

        {!start && (
          <>
            <Button variant="primary">Start</Button>
          </>
        )}

        {start && (
          <>
            <AceEditor
              mode="javascript"
              // onChange={onChange}
              // value={currentQuestion}
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
            <Button variant="info">Submit</Button>
          </>
        )}
      </div>
    </>
  );
}
