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
  });

  let {
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
  } = atHomeData;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const onChange = (e) => {
    setAtHomeData((prevState) => ({
      [e.target.mc1]: e.target.value,
      [e.target.hh1]: e.target.value,
      [e.target.mc2]: e.target.value,
      [e.target.hh2]: e.target.value,
      [e.target.mc3]: e.target.value,
      [e.target.hh3]: e.target.value,
      [e.target.mc4]: e.target.value,
      [e.target.hh4]: e.target.value,
      [e.target.mc5]: e.target.value,
      [e.target.hh5]: e.target.value,
      [e.target.mc6]: e.target.value,
      [e.target.hh6]: e.target.value,
      [e.target.mc7]: e.target.value,
      [e.target.hh7]: e.target.value,
      [e.target.mc8]: e.target.value,
      [e.target.hh8]: e.target.value,
      [e.target.mc9]: e.target.value,
      [e.target.hh9]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const userData = {
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
        <SubNav subName="New At Home with Your Character" />

        <form onSubmit={handleSubmit}>
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
                    type="mc1"
                    className="form-fieldAH"
                    name="mc1"
                    id="mc1"
                    defaultvalue={mc1}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh1"
                    className="form-fieldAH"
                    name="hh1"
                    id="hh1"
                    defaultvalue={hh1}
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
                    type="mc2"
                    className="form-fieldAH"
                    name="mc2"
                    id="mc2"
                    defaultvalue={mc2}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh2"
                    className="form-fieldAH"
                    name="hh2"
                    id="hh2"
                    defaultvalue={hh2}
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
                    type="mc3"
                    className="form-fieldAH"
                    name="mc3"
                    id="mc3"
                    defaultvalue={mc3}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh3"
                    className="form-fieldAH"
                    name="hh3"
                    id="hh3"
                    defaultvalue={hh3}
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
                    type="mc4"
                    className="form-fieldAH"
                    name="mc4"
                    id="mc4"
                    defaultvalue={mc4}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh4"
                    className="form-fieldAH"
                    name="hh4"
                    id="hh4"
                    defaultvalue={hh4}
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
                    type="mc5"
                    className="form-fieldAH"
                    name="mc5"
                    id="mc5"
                    defaultvalue={mc5}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh5"
                    className="form-fieldAH"
                    name="hh5"
                    id="hh5"
                    defaultvalue={hh5}
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
                    type="mc6"
                    className="form-fieldAH"
                    name="mc6"
                    id="mc6"
                    defaultvalue={mc6}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh6"
                    className="form-fieldAH"
                    name="hh6"
                    id="hh6"
                    defaultvalue={hh6}
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
                    type="mc7"
                    className="form-fieldAH"
                    name="mc7"
                    id="mc7"
                    defaultvalue={mc7}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh7"
                    className="form-fieldAH"
                    name="hh7"
                    id="hh7"
                    defaultvalue={hh7}
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
                    type="mc8"
                    className="form-fieldAH"
                    name="mc8"
                    id="mc8"
                    defaultvalue={mc8}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh8"
                    className="form-fieldAH"
                    name="hh8"
                    id="hh8"
                    defaultvalue={hh8}
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
                    type="mc9"
                    className="form-fieldAH"
                    name="mc9"
                    id="mc9"
                    defaultvalue={mc9}
                    placeholder=""
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="2"
                    required
                    type="hh9"
                    className="form-fieldAH"
                    name="hh9"
                    id="hh9"
                    defaultvalue={hh9}
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

export default AtHome;
