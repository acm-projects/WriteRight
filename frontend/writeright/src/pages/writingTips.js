//Import CSS sheet from same folder
import "../everything.css";
import logo from '../images/writerightTitle.png';
import adverbs from '../images/adverbsPostWT.png';
import emotions from '../images/emotionsPostWT.png';
import endings from '../images/endingsPostWT.png';
import qualifiers from '../images/qualifiersPostWT.png';


function WritingTips() {

  return (
    <body>
    <div className="bgBlue">
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
        <div class='parentWT'>
        <br></br>
        <br></br>
            <div class='row1WT'>
                <a href="https://www.writeraccess.com/blog/how-to-cut-out-adverbs-and-boost-your-writing/#:~:text=There%20are%20several%20ways%20to,to%20describe%20what%27s%20going%20on" target="_blank" rel="noopener noreferrer">
                <button className="postWT"><img src={adverbs} className="imageWT" alt="idk" />
                How to Cut Out Adverbs and Boost Your Writing<br></br><span className="articleWT">
                <p className="gradientWT">[WRITER ACCESS] - Think back to your grammar lessons in elementary or middle school. At some point, you learned that a noun was a person, place, or thing, that an adjective describes a ...</p></span></button>
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="https://www.masterclass.com/articles/how-to-write-emotion" target="_blank" rel="noopener noreferrer">
                <button className="postWT"><img src={emotions} className="imageWT" alt="idk" />
                5 Ways to Make Your Readers Feel Emotion<br></br><span className="articleWT">
                <p className="gradientWT">[MASTERCLASS] - One of the most powerful writing skills an author can have is the ability to tease emotions out of the reader. Many readers turn to novels to be transported to a world of intense ...</p></span></button>
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="https://www.constant-content.com/content-writing-service/2012/03/eliminating-wordiness-qualifiers/" target="_blank" rel="noopener noreferrer">
                <button className="postWT"><img src={qualifiers} className="imageWT" alt="idk" />
                Eliminating Wordiness: Qualifiers<br></br><span className="articleWT">
                <p className="gradientWT">[CONSTANT CONTENT] - When you write for Constant Content or anyone else (but why would you want to do that?), you should strive for conciseness. Concise writing is free of unnecessary...</p></span></button>
                </a>
            </div>
            <div class='row2WT'>
            <a href="https://www.poynter.org/educators-students/2017/9-ways-to-end-your-stories/" target="_blank" rel="noopener noreferrer">
                <button className="postWT"><img src={endings} className="imageWT" alt="idk" />
                9 Ways to End Your Stories<br></br><span className="articleWT">
                <p className="gradientWT">[POYNTER] -  There are endless ways to end stories, but few hard and fast rules. Yet every writer knows that the story must reach a satisfying conclusion. Here are a handful of strategies on which you…</p></span></button>
                </a>
            </div>


        </div>

    </div>
    </body>
  );
}

export default WritingTips;