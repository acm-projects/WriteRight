//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';


function Sheets() {

  return (
    <body>
    <div className="bgRedWhiteS">
        <nav className="main">
            <img src={logo} className="logoBS" alt="Logo" />
            <ul class="a">
            <li class="a" id="myprojects">
              <a href="/my-projects">My Projects</a>
            </li>
            <li class="a" id="sheets">
              <a href="/sheets">Sheets</a>
            </li>
            <li class="a" id="grammarchecker">
              <a href="/grammar-checker">Grammar Checker</a>
            </li>
            <li class="a" id="writingtips">
              <a href="/writing-tips">Writing Tips</a>
            </li>
          </ul>
            <button className="submit-btnNB">log out</button>
        </nav>
        <nav className="sub">
          <ul class="a">
            <li class="a">
              <a className="sNavRed" href="/sheets">Sheets</a>
            </li>
        </ul>
          </nav>
        <hr></hr>
        <div className="parentS">
            <a href="/sheets/blank-sheet">
              <button className="projectMP">+ New Blank Sheet</button>
            </a>
            <a href="/sheets/story-arc">
              <button className="projectMP">+ New Eight Point Story Arc</button>
            </a>
            <a href="/sheets/character-log">
              <button className="projectMP">+ New Character Log</button>
            </a>
            <a href="/sheets/at-home-with-your-character">
              <button className="projectMP">+ New At Home With Your Character</button>
            </a>
        </div>

    </div>
    </body>
  );
}

export default Sheets;