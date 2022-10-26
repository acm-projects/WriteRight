//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';


function MyProjects() {

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
        <div className="parentMP">
            <button className="projectMP">+ New Project</button>
            <button className="projectMP">All Projects</button>
            <button className="projectMP">Unfiled Sheets</button>
            <button className="projectMP">Project 1</button>
            <button className="projectMP">Project 2</button>
        </div>


    </div>
    </body>
  );
}

export default MyProjects;