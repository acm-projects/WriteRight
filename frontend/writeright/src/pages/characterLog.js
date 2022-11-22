//Import CSS sheet from same folder
import "../everything.css";
import logo from "../images/writerightTitle.png";
import { useState } from "react";
import Nav from "../components/nav/Nav";
import axios from "axios";

function CharacterLog() {
  //Hook to store form data and submit it as a single object
  const [characterLogData, setCharacterLogData] = useState({
    title: "",
    sheetType: 3,
    sec1: "",
    chara1: "",
    detail1: "",
    seen1: "",
    sec2: "",
    chara2: "",
    detail2: "",
    seen2: "",
    sec3: "",
    chara3: "",
    detail3: "",
    seen3: "",
    sec4: "",
    chara4: "",
    detail4: "",
    seen4: "",
    sec5: "",
    chara5: "",
    detail5: "",
    seen5: "",
    sec6: "",
    chara6: "",
    detail6: "",
    seen6: "",
    sec7: "",
    chara7: "",
    detail7: "",
    seen7: "",
    sec8: "",
    chara8: "",
    detail8: "",
    seen8: "",
    sec9: "",
    chara9: "",
    detail9: "",
    seen9: "",
    sec10: "",
    chara10: "",
    detail10: "",
    seen10: "",
  });

  let {
    title,
    sheetType,
    sec1,
    chara1,
    detail1,
    seen1,
    sec2,
    chara2,
    detail2,
    seen2,
    sec3,
    chara3,
    detail3,
    seen3,
    sec4,
    chara4,
    detail4,
    seen4,
    sec5,
    chara5,
    detail5,
    seen5,
    sec6,
    chara6,
    detail6,
    seen6,
    sec7,
    chara7,
    detail7,
    seen7,
    sec8,
    chara8,
    detail8,
    seen8,
    sec9,
    chara9,
    detail9,
    seen9,
    sec10,
    chara10,
    detail10,
    seen10,
  } = characterLogData;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const handleChange = (e) => {
    setCharacterLogData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();
    console.log(characterLogData);

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
                New Character Log
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
                id="title"
                value={title}
                onChange={handleChange}
                placeholder="Story Title"
              ></input>
            </li>
          </ul>
          <nav className="rightBtn">
            <button onClick={handleSubmit} type="submit" className="redButton">
              Save
            </button>
          </nav>
        </nav>
        <hr class="redSolid"></hr>

        <div class="parentCL">
          <table class="charaLog">
            <tr className="titlesCL">
              <td>Date/Section</td>
              <td>Character</td>
              <td className="detailCL">Details Mentioned</td>
              <td>Last Seen</td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec1"
                  id="sec1"
                  value={sec1}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara1"
                  id="chara1"
                  onChange={handleChange}
                  value={chara1}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail1"
                  id="detail1"
                  value={detail1}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen1"
                  id="seen1"
                  value={seen1}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  onChange={handleChange}
                  name="sec2"
                  id="sec2"
                  value={sec2}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara2"
                  onChange={handleChange}
                  id="chara2"
                  value={chara2}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail2"
                  id="detail2"
                  value={detail2}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen2"
                  id="seen2"
                  value={seen2}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec3"
                  id="sec3"
                  value={sec3}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara3"
                  onChange={handleChange}
                  id="chara3"
                  value={chara3}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail3"
                  onChange={handleChange}
                  id="detail3"
                  value={detail3}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen3"
                  onChange={handleChange}
                  id="seen3"
                  value={seen3}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec4"
                  onChange={handleChange}
                  id="sec4"
                  value={sec4}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="value"
                  className="form-fieldCL"
                  name="chara4"
                  onChange={handleChange}
                  id="chara4"
                  value={chara4}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail4"
                  onChange={handleChange}
                  id="detail4"
                  value={detail4}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen4"
                  id="seen4"
                  onChange={handleChange}
                  value={seen4}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec5"
                  id="sec5"
                  onChange={handleChange}
                  value={sec5}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara5"
                  onChange={handleChange}
                  id="chara5"
                  value={chara5}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail5"
                  id="detail5"
                  onChange={handleChange}
                  value={detail5}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldCL"
                  name="seen5"
                  id="seen5"
                  value={seen5}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec6"
                  id="sec6"
                  onChange={handleChange}
                  value={sec6}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara6"
                  onChange={handleChange}
                  id="chara6"
                  value={chara6}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail6"
                  id="detail6"
                  onChange={handleChange}
                  value={detail6}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen6"
                  id="seen6"
                  onChange={handleChange}
                  value={seen6}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec7"
                  onChange={handleChange}
                  id="sec7"
                  value={sec7}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara7"
                  onChange={handleChange}
                  id="chara7"
                  value={chara7}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail7"
                  onChange={handleChange}
                  id="detail7"
                  value={detail7}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  onChange={handleChange}
                  className="form-fieldCL"
                  name="seen7"
                  id="seen7"
                  value={seen7}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec8"
                  id="sec8"
                  onChange={handleChange}
                  value={sec8}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara8"
                  id="chara8"
                  onChange={handleChange}
                  value={chara8}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail8"
                  id="detail8"
                  value={detail8}
                  onChange={handleChange}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen8"
                  id="seen8"
                  onChange={handleChange}
                  value={seen8}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec9"
                  id="sec9"
                  onChange={handleChange}
                  value={sec9}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara9"
                  id="chara9"
                  onChange={handleChange}
                  value={chara9}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail9"
                  onChange={handleChange}
                  id="detail9"
                  value={detail9}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen9"
                  onChange={handleChange}
                  id="seen9"
                  value={seen9}
                  placeholder=""
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="sec10"
                  onChange={handleChange}
                  id="sec10"
                  value={sec10}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="chara10"
                  id="chara10"
                  onChange={handleChange}
                  value={chara10}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="detail10"
                  onChange={handleChange}
                  id="detail10"
                  value={detail10}
                  placeholder=""
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="2"
                  required
                  type="text"
                  className="form-fieldCL"
                  name="seen10"
                  onChange={handleChange}
                  id="seen10"
                  value={seen10}
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

export default CharacterLog;
