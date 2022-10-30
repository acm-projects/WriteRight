//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';



function UserSheet() {

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
              <a className="sNavBlack" href="/my-projects">My Projects</a>
            </li>
            <li class="a">
              <p className="sNavBlack"> &gt; </p>
            </li>
            <li class="a">
              <a className="sNavBlack" href="/my-projects/project">Project</a>
            </li>
            <li class="a">
              <p className="sNavBlack"> &gt; </p>
            </li>
            <li class="a">
              <a className="sNavBlack" href="/my-projects/project/sheet">Sheet</a>
            </li>
          </ul>
        </nav>
        <hr class="blackSolid"></hr>
        <br></br> <br></br>
        <p>Question from Susan: Should each worksheet's data fields be a component (I mean all the data fields collectively in 1 component) so that the input fields are
        automatically on the "my projects&gt;project&gt;sheet" page and then all the user data from the database
        have a place to be? </p>



    </div>
    </body>
  );
}

export default UserSheet;