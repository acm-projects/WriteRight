//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';
import SheetPreview from '../components/userSheetPreview';


function Project() {

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
        <nav className="sub">
          <ul class="a">
            <li class="a">
              <a className="sNavRed" href="/my-projects">My Projects</a>
            </li>
            <li class="a">
              <p className="sNavRed"> &gt; </p>
            </li>
            <li class="a">
              <a className="sNavRed" href="/my-projects/project">Project</a>
            </li>
          </ul>
        </nav>
        <hr class="redSolid"></hr>
        <a href="/sheets">
        <button className="newSheetBtn">+ New</button>
        </a>
        <br></br> <br></br>
        <div className="parentSP">
        <SheetPreview text='Story Arc'/>
        <SheetPreview text='Story Arc (1)'/>
        <SheetPreview text='Character Log'/>
        </div>



    </div>
    </body>
  );
}

export default Project;