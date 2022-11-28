//Import CSS sheet from same folder
import "../everything.css";
import logo from "../images/writerightTitle.png";
import { useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLoginStore } from "../stores/LoginStore";

function BlankSheet() {
  const navigate = useNavigate();
  //Hook to store form data and submit it as a single object
  const [blankSheet, setBlankSheet] = useState({
    content: "",
    title: "",
    sheetType: 0,
  });
  const [runEff, setRunEff] = useState(false);

  const checkText = useLoginStore((state) => state.checkText);
  const setCheckText = useLoginStore((state) => state.setCheckText);
  const parentProject = useLoginStore((state) => state.parentProject);
  const projId = useLoginStore((state) => state.projId);
  const projContents = useLoginStore((state) => state.projContents);
  const setProjContents = useLoginStore((state) => state.setProjContents);
  const [sheetId, setSheetId] = useState({
    id: "",
  });

  let { content, title, sheetType } = blankSheet;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const handleChange = (e) => {
    setBlankSheet((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleGrammarCheck = (e) => {
    e.preventDefault();
    setCheckText(blankSheet.content);
    console.log("The global text is:" + checkText);
    navigate("/grammar");
  };

  //Function to send data from input fields to database
  //Function to send data from input fields to database
  //Function to send data from input fields to database
  const handleSubmit = async (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const postUrl = "http://localhost:8080/blanksheets";
    const patchUrl = `http://localhost:8080/projects/update/${projId}`;

    const postReq = async () => {
      try {
        const response = await axios.post(postUrl, blankSheet);
        console.log(`The res id is ${response.data._id}`);
        setSheetId({
          id: response.data._id,
        });
        setRunEff(true);
        console.log(`1: The sheet id here is ${sheetId.id}`);
        //  await patchReq(response.data._id);
        return response.data._id;
      } catch (error) {
        alert("Error, check console for information!");
        console.log(error);
      }
    };

    /*const patchReq = async (resId) => {
      try {
        console.log(`2: The sheet id here is ${resId}`);
        await setSheetId({ id: resId });
        const response = await axios.patch(patchUrl, sheetId);
        alert("Successfully added the sheet to the project's contents!");
        console.log(response);
        navigate(`/projects/${parentProject}`);
      } catch (error) {
        alert("Error, couldnt add the sheet to the project!");
        console.log(error);
      }
    };*/

    await postReq();
  };

  const patchUrl = `http://localhost:8080/projects/update/${projId}`;

  useEffect(() => {
    if (sheetId.id && runEff) {
      setRunEff(false);
      patchReq(sheetId);
      console.log(`The contents are ${projContents}`);
    }
  }, [sheetId.id]);

  const patchReq = async (resId) => {
    try {
      console.log(`2: The sheet id here is ${resId}`);
      await setSheetId({ id: resId });
      const response = await axios.patch(patchUrl, sheetId);
      alert("Successfully added the sheet to the project's contents!");
      console.log(response);
      setProjContents(response.data.contents);
      navigate(`/projects/${parentProject}`);
    } catch (error) {
      alert("Error, couldnt add the sheet to the project!");
      console.log(error);
    }
  };

  return (
    <body>
      <div className="bgRedGray">
        <Nav />
        <nav className="sub">
          <ul class="a">
            <li class="a">
              <a className="sNavRed" href="">
                Sheets
              </a>
            </li>
            <li class="a">
              <p className="sNavRed"> &gt; </p>
            </li>
            <li class="a">
              <a className="sNavRed" href="">
                New Blank Sheet
              </a>
            </li>
            <li class="a">
              <p className="sNavRed"> &gt; </p>
            </li>
            <li class="a">
              <input
                required
                type="text"
                className="form-fieldCLstory"
                name="title"
                id="title"
                value={title}
                onChange={handleChange}
                placeholder="Sheet Name"
              ></input>
            </li>
          </ul>
          <nav className="rightBtn">
            <button onClick={handleGrammarCheck} className="redButton">
              Check Grammar
            </button>
            <button type="submit" className="redButton" onClick={handleSubmit}>
              Save
            </button>
          </nav>
        </nav>
        <hr class="redSolid"></hr>

        <div class="parentNBS">
          <div class="child1NBS">
            <nav className="textStyle">
              <ul className="b">
                <li>
                  <button className="textStyleBtn" id="N">
                    N
                  </button>
                </li>
                <li>
                  <button className="textStyleBtn" id="B">
                    B
                  </button>
                </li>
                <li>
                  <button className="textStyleBtn" id="I">
                    I
                  </button>
                </li>
                <li>
                  <button className="textStyleBtn" id="U">
                    U
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div class="child2NBS">
            <form onSubmit={handleSubmit} className="formBS">
              <textarea
                required
                type="text"
                className="blankSheet"
                name="content"
                onChange={handleChange}
                id="content"
                value={content}
                placeholder="Start typing here . . ."
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default BlankSheet;
