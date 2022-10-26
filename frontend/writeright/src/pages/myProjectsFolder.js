//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';


function MyProjectsFolder() {

  return (
    <body>
    <div className="bgRainbowWhite">
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
        <br></br> <br></br>
        <div className="">
        </div>


    </div>
    </body>
  );
}

export default MyProjectsFolder;