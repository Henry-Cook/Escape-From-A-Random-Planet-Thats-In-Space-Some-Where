import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { FormControl, Button, Form } from "react-bootstrap";
import "./submitQuestions.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { verifyUser } from "../../services/auth";

export default function SubmitQuestion(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [question, setQuestion] = useState({
    question: "let firstStep = 'Delete This'",
    answer: "",
    prompt: "",
  });
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      userData ? setCurrentUser(userData) : history.push("/login");
    };
    handleVerify();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  const handleAceChange = (val) => {
    setQuestion({
      ...question,
      question: val,
    });
  };

  return (
    <div className="submit-container">
      <div className="form-styling">
        <h1 className="submit-title">Submit a Question!</h1>
        <form>
          <Form.Label className="submit-label">
            Question Prompt - Witty Sci-Fi Jargon Here ⬇
          </Form.Label>
          <FormControl
            name="prompt"
            as="textarea"
            className="text-area"
            onChange={handleChange}
          />
          <Form.Label className="submit-label">Expected Answer ⬇</Form.Label>
          <FormControl
            name="answer"
            onChange={handleChange}
            as="textarea"
            className="text-area"
          />
          <Form.Label className="submit-label">Code Here ⬇</Form.Label>
          <div className="submit-editor">
            <AceEditor
              name="question"
              onChange={handleAceChange}
              value={question.question}
              mode="javascript"
              theme="monokai"
              name="editor"
              fontSize={14}
              height="30vh"
              width="50vw"
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                showLineNumbers: true,
                tabSize: 2,
                wrap: true,
              }}
            />
          </div>

          <Button variant="dark" onClick={() => props.submitQuestion(question)}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
