//Import CSS sheet from same folder
import "../everything.css";
import logo from "../images/writerightTitle.png";
import Nav from "../components/nav/Nav";
import SubNav from "../components/subnav/SubNav";
import { useState } from "react";
import axios from "axios";

function AtHome() {
  //Hook to store form data and submit it as a single object
  const [atHomeData, setAtHomeData] = useState({
    title: "",
    mc1: "",
    hh1: "",
    mc2: "",
    hh2: "",
    mc3: "",
    hh3: "",
    mc4: "",
    hh4: "",
    mc5: "",
    hh5: "",
    mc6: "",
    hh6: "",
    mc7: "",
    hh7: "",
    mc8: "",
    hh8: "",
    mc9: "",
    hh9: "",
    sheetType: 2,
  });

  let {
    title,
    mc1,
    hh1,
    mc2,
    hh2,
    mc3,
    hh3,
    mc4,
    hh4,
    mc5,
    hh5,
    mc6,
    hh6,
    mc7,
    hh7,
    mc8,
    hh8,
    mc9,
    hh9,
    sheetType,
  } = atHomeData;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const handleChange = (e) => {
    setAtHomeData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();
    console.log(atHomeData);

    const sheetData = {
      mc1,
      hh1,
      mc2,
      hh2,
      mc3,
      hh3,
      mc4,
      hh4,
      mc5,
      hh5,
      mc6,
      hh6,
      mc7,
      hh7,
      mc8,
      hh8,
      mc9,
      hh9,
      sheetType,
      title,
    };

    //Replace with URL that will be used to send post request to the DB
    const postUrl = "";
    //Below here write out post request

    //After post request clear form data, set up redirect to new page after user signs up
  };
  return (
    <body>
      <div className="bgRedWhite">
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
            <button type="submit" className="redButton" onClick={handleSubmit}>
              Save To
            </button>
          </nav>
        </nav>
        <hr class="redSolid"></hr>
        <div class="parentAH">
          <table class="atHome">
            <tr className="titlesAH">
              <td className="questionsCL"></td>
              <td className="titlesCL">Main Character</td>
              <td className="titlesCL">Household</td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  How do they create conflict for each other?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="mc1"
                  value={mc1}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh1"
                  value={hh1}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What annoys them about each other?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="mc2"
                  onChange={handleChange}
                  value={mc2}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh2"
                  onChange={handleChange}
                  value={hh2}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What do they need to allow each other to do?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldAH"
                  id="mc3"
                  value={mc3}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh3"
                  onChange={handleChange}
                  value={hh3}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What do they need to prohibit each other from doing?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldAH"
                  id="mc4"
                  value={mc4}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldAH"
                  id="hh4"
                  value={hh4}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What do they need to hide from each other?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldAH"
                  id="mc5"
                  value={mc5}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldAH"
                  id="hh5"
                  value={hh5}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  How did they come to share a dwelling?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="mc6"
                  onChange={handleChange}
                  value={mc6}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh6"
                  onChange={handleChange}
                  value={hh6}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What are their household responsibilities?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="mc7"
                  value={mc7}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh7"
                  value={hh7}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What do they contribute to the household?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="mc8"
                  onChange={handleChange}
                  value={mc8}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh8"
                  onChange={handleChange}
                  value={hh8}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p className="questionsCL">
                  What keeps them living together, despite the conflicts?
                </p>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  onChange={handleChange}
                  id="mc9"
                  value={mc9}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldAH"
                  id="hh9"
                  onChange={handleChange}
                  value={hh9}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </body>
  );
}

export default AtHome;
