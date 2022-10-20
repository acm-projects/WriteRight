//Import CSS sheet from same folder
import "../everything.css";
import logo from "../images/writerightTitle.png";
import { useState } from "react";
import axios from "axios";

function CharacterLog() {
  //Hook to store form data and submit it as a single object
  const [characterLogData, setCharacterLogData] = useState({
    story: "",
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
    story,
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
  const onChange = (e) => {
    setCharacterLogData((prevState) => ({
      [e.target.story]: e.target.value,
      [e.target.sec1]: e.target.value,
      [e.target.chara1]: e.target.value,
      [e.target.detail1]: e.target.value,
      [e.target.seen1]: e.target.value,
      [e.target.sec2]: e.target.value,
      [e.target.chara2]: e.target.value,
      [e.target.detail2]: e.target.value,
      [e.target.seen2]: e.target.value,
      [e.target.sec3]: e.target.value,
      [e.target.chara3]: e.target.value,
      [e.target.detail3]: e.target.value,
      [e.target.seen3]: e.target.value,
      [e.target.sec4]: e.target.value,
      [e.target.chara4]: e.target.value,
      [e.target.detail4]: e.target.value,
      [e.target.seen4]: e.target.value,
      [e.target.sec5]: e.target.value,
      [e.target.chara5]: e.target.value,
      [e.target.detail5]: e.target.value,
      [e.target.seen5]: e.target.value,
      [e.target.sec6]: e.target.value,
      [e.target.chara6]: e.target.value,
      [e.target.detail6]: e.target.value,
      [e.target.seen6]: e.target.value,
      [e.target.sec7]: e.target.value,
      [e.target.chara7]: e.target.value,
      [e.target.detail7]: e.target.value,
      [e.target.seen7]: e.target.value,
      [e.target.sec8]: e.target.value,
      [e.target.chara8]: e.target.value,
      [e.target.detail8]: e.target.value,
      [e.target.seen8]: e.target.value,
      [e.target.sec9]: e.target.value,
      [e.target.chara9]: e.target.value,
      [e.target.detail9]: e.target.value,
      [e.target.seen9]: e.target.value,
      [e.target.sec10]: e.target.value,
      [e.target.chara10]: e.target.value,
      [e.target.detail10]: e.target.value,
      [e.target.seen10]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const userData = {
      story,
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
    };

    //Replace with URL that will be used to send post request to the DB
    const postUrl = "";
    //Below here write out post request

    //After post request clear form data, set up redirect to new page after user signs up
  };
  return (
    <body>
      <div className="bgRedWhite">
        <nav className="main">
          <img src={logo} className="logoBS" alt="Logo" />
          <ul class="a">
            <li class="a" id="myprojects">
              <a href="">My Projects</a>
            </li>
            <li class="a" id="sheets">
              <a href="">Sheets</a>
            </li>
            <li class="a" id="grammarchecker">
              <a href="">Grammar Checker</a>
            </li>
            <li class="a" id="writingtips">
              <a href="">Writing Tips</a>
            </li>
          </ul>
          <button className="submit-btnNB">log out</button>
        </nav>

        <form onSubmit={handleSubmit}>
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
                  type="story"
                  className="form-fieldCLstory"
                  name="story"
                  id="story"
                  defaultvalue={story}
                  placeholder="Story Title"
                ></input>
              </li>
            </ul>
            <nav className="rightBtn">
              <button type="submit" className="redButton">
                Save
              </button>
              <button type="submit" className="redButton">
                Save To
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
                    type="sec1"
                    className="form-fieldCL"
                    name="sec1"
                    id="sec1"
                    defaultvalue={sec1}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara1"
                    className="form-fieldCL"
                    name="chara1"
                    id="chara1"
                    defaultvalue={chara1}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail1"
                    className="form-fieldCL"
                    name="detail1"
                    id="detail"
                    defaultvalue={detail1}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen1"
                    className="form-fieldCL"
                    name="seen1"
                    id="seen1"
                    defaultvalue={seen1}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec2"
                    className="form-fieldCL"
                    name="sec2"
                    id="sec2"
                    defaultvalue={sec2}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara2"
                    className="form-fieldCL"
                    name="chara2"
                    id="chara2"
                    defaultvalue={chara2}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail2"
                    className="form-fieldCL"
                    name="detail2"
                    id="detail2"
                    defaultvalue={detail2}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen2"
                    className="form-fieldCL"
                    name="seen2"
                    id="seen2"
                    defaultvalue={seen2}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec3"
                    className="form-fieldCL"
                    name="sec3"
                    id="sec3"
                    defaultvalue={sec3}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara3"
                    className="form-fieldCL"
                    name="chara3"
                    id="chara3"
                    defaultvalue={chara3}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail3"
                    className="form-fieldCL"
                    name="detail3"
                    id="detail3"
                    defaultvalue={detail3}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen3"
                    className="form-fieldCL"
                    name="seen3"
                    id="seen3"
                    defaultvalue={seen3}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec4"
                    className="form-fieldCL"
                    name="sec4"
                    id="sec4"
                    defaultvalue={sec4}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara4"
                    className="form-fieldCL"
                    name="chara4"
                    id="chara4"
                    defaultvalue={chara4}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail4"
                    className="form-fieldCL"
                    name="detail4"
                    id="detail4"
                    defaultvalue={detail4}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen4"
                    className="form-fieldCL"
                    name="seen4"
                    id="seen4"
                    defaultvalue={seen4}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec5"
                    className="form-fieldCL"
                    name="sec5"
                    id="sec5"
                    defaultvalue={sec5}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara5"
                    className="form-fieldCL"
                    name="chara5"
                    id="chara5"
                    defaultvalue={chara5}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail5"
                    className="form-fieldCL"
                    name="detail5"
                    id="detail5"
                    defaultvalue={detail5}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen5"
                    className="form-fieldCL"
                    name="seen5"
                    id="seen5"
                    defaultvalue={seen5}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec6"
                    className="form-fieldCL"
                    name="sec6"
                    id="sec6"
                    defaultvalue={sec6}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara6"
                    className="form-fieldCL"
                    name="chara6"
                    id="chara6"
                    defaultvalue={chara6}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail6"
                    className="form-fieldCL"
                    name="detail6"
                    id="detail6"
                    defaultvalue={detail6}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen6"
                    className="form-fieldCL"
                    name="seen6"
                    id="seen6"
                    defaultvalue={seen6}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec7"
                    className="form-fieldCL"
                    name="sec7"
                    id="sec7"
                    defaultvalue={sec7}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara7"
                    className="form-fieldCL"
                    name="chara7"
                    id="chara7"
                    defaultvalue={chara7}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail7"
                    className="form-fieldCL"
                    name="detail7"
                    id="detail7"
                    defaultvalue={detail7}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen7"
                    className="form-fieldCL"
                    name="seen7"
                    id="seen7"
                    defaultvalue={seen7}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec8"
                    className="form-fieldCL"
                    name="sec8"
                    id="sec8"
                    defaultvalue={sec8}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara8"
                    className="form-fieldCL"
                    name="chara8"
                    id="chara8"
                    defaultvalue={chara8}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail8"
                    className="form-fieldCL"
                    name="detail8"
                    id="detail8"
                    defaultvalue={detail8}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen8"
                    className="form-fieldCL"
                    name="seen8"
                    id="seen8"
                    defaultvalue={seen8}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec9"
                    className="form-fieldCL"
                    name="sec9"
                    id="sec9"
                    defaultvalue={sec9}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara9"
                    className="form-fieldCL"
                    name="chara9"
                    id="chara9"
                    defaultvalue={chara9}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail9"
                    className="form-fieldCL"
                    name="detail9"
                    id="detail9"
                    defaultvalue={detail9}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen9"
                    className="form-fieldCL"
                    name="seen9"
                    id="seen9"
                    defaultvalue={seen9}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="sec10"
                    className="form-fieldCL"
                    name="sec10"
                    id="sec10"
                    defaultvalue={sec10}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="chara10"
                    className="form-fieldCL"
                    name="chara10"
                    id="chara10"
                    defaultvalue={chara10}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="detail10"
                    className="form-fieldCL"
                    name="detail10"
                    id="detail10"
                    defaultvalue={detail10}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="seen10"
                    className="form-fieldCL"
                    name="seen10"
                    id="seen10"
                    defaultvalue={seen10}
                    placeholder=""
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </body>
  );
}

export default CharacterLog;
