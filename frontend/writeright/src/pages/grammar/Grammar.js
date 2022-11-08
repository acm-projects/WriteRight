import React, { useEffect, useState } from "react";
import "./Grammar.css";
import Error from "../../components/errors/Error";
import Nav from "../../components/nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../stores/LoginStore";

function Grammar() {
  const getLogin = useLoginStore((state) => state.login);
  const navigate = useNavigate();
  const [grammarErrors, setGrammarErrors] = useState([]);
  const [resReceived, setResReceived] = useState(false);

  const [story, setStory] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setStory(e.target.value);
    setCount(e.target.value.length);
  };

  //Function to send request to API
  const handleSubmit = (e) => {
    e.preventDefault();

    const postUrl = "http://localhost:8080/grammar";

    axios
      .post(postUrl, { story })
      .then(function (response) {
        console.log(response);
        console.log(response.data.matches);
        alert("Grammar has been checked!");
        setGrammarErrors(response.data.matches);
        setResReceived(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error, grammar hasn't been checked. Please check console!");
      });
  };

  /*
  useEffect(() => {
    if (getLogin == false) {
      alert(`You must sign in before accessing WriteRight's tools!`);
      navigate("/");
    }
  }, [getLogin]);*/

  return (
    <div className="grammar-outer">
      <Nav />
      <div className="grammar">
        <div className="grammar-nav">
          <div className="upload-buttons">
            <button className="upload-button">Upload from Computer</button>
            <button className="upload-button">Upload from WriteRight</button>
          </div>
          <div className="content-buttons">
            <button className="content-btn-1">Save</button>
            <button className="content-btn-2">Save to</button>
            <button className="content-btn-1">Clear</button>
          </div>
        </div>
        <div className="checker-section">
          <div className="checker-header">
            <p className="character-counter">{count} / 10,000 Characters</p>
          </div>
          <textarea
            className="grammar-box"
            value={story}
            maxLength="10000"
            onChange={handleChange}
            placeholder="Import an existing story, or copy and paste one here and then click the button to check your grammar!  (Max Limit: 10,000 Characters)"
          />
          <button onClick={handleSubmit} className="grammar-submit-btn">
            Submit
          </button>
        </div>
      </div>
      <div className="grammar">
        <div className="all-error-body">
          <h2 className="error-main-title">
            Errors Detected: {grammarErrors.length}
          </h2>
          <div className="individual-errors">
            {grammarErrors.map((error, index) => (
              <Error
                key={index}
                errNum={index + 1}
                context={error.context}
                message={error.message}
                replacements={error.replacements}
                rule={error.rule}
                shortMessage={error.shortMessage}
                length={error.length}
                offset={error.offset}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grammar;
