
# WriteRight 
#
WriteRight is a one-stop shop for creative writers at any stage of the writing process. Through the app, writers get access to interactive planning pages, a grammar checker, and stylistic writing tips so they can write beautiful stories that they are proud of.

# MVP:
- Login Pages
    - Default Login Screen: Prompts you to enter your username and password 
    - Sign-Up Page


4 Tabs:
- Planning Pages: 
    - Interactive worksheet to help plan a story using the 8-point arc format (1)
    - Character Building Questionnaire
    - Worldbuilding Worksheet
- “Workshop” Tab: Revising/Editing
    - Allow users to paste their writing into this tab
    - Integrate grammar checker API to check writing and provide suggestions to users
- Help Tab: helpful links for extra writing tips 
    - Avoid overusing adverbs/lists of popular plot devices
    - What “Show Don’t Tell” Really Means (2)
    - Cut the Cliches3
- “My Worksheets” Tab
    - Users can create folders for each of their stories that will store their corresponding worksheets 
    - Save worksheets into folders and be able to access them through this tab
- Structure:
    - My worksheet
        - Folder 1: Story 1
        - Plot Planner
        - Plot Planner (2)
        - Worldbuilding 
    - F2: Story 2
        - Character Questionnaire
        - Plot Planner
# Stretch Goals

- Shareable Profile Page
        - Allow users to post their own blog posts and helpful tips
        - Allow them to share their completed writing 
        - Followers
- Add more worksheets/helpful links and be able to search for specific topics within the tab

# Tech Stack

- Flutter or React Native (Front-End)
    - [https://flutter.dev/](https://flutter.dev/)
    - [Flutter Tutorial Youtube:](https://www.youtube.com/watch?v=1ukSR1GRtMU&list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ)
    - [Free Flutter Basics Udemy Course: ](https://www.udemy.com/share/1067vU3@VbyKb3tryUAlCk3vjVnCObMZ8FZB7HAqHDVns-LbeWSqS1CWLEyvzVRz-4gDl_XvaA==/)
    - [Widget Catalog](https://docs.flutter.dev/development/ui/widgets) and [Flutter Layout Cheat Sheet](https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e)
    - [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
#
- Dart or Javascript (Backend)
    - [https://dart.dev/tutorials](https://dart.dev/tutorials)
    - [Dart Tutorial:](https://www.youtube.com/watch?v=5rtujDjt50I&list=PLlxmoA0rQ-LyHW9voBdNo4gEEIh0SjG-q) 
    - [Free Dart Basics Udemy Course: ](https://www.udemy.com/share/1067vU3@VbyKb3tryUAlCk3vjVnCObMZ8FZB7HAqHDVns-LbeWSqS1CWLEyvzVRz-4gDl_XvaA==/)
    - [Javascript Udemy Tutorial](https://www.udemy.com/course/javascript-essentials/)
#

- Firebase or Firestore (Database)
    - Both have the ability to integrate well with Flutter 
    - Firestore is made for mobile app development by Firebase 
    - [Differences between Firebase and Firestore](https://firebase.google.com/docs/database/rtdb-vs-firestore)
    - [https://firebase.google.com/docs](https://firebase.google.com/docs)
    - [https://firebase.google.com/docs/firestore](https://firebase.google.com/docs/firestore)
    - [Firebase Youtube Tutorial](https://www.youtube.com/watch?v=9kRgVxULbag)
    - [Firestore Youtube Tutorial ](https://www.youtube.com/watch?v=4d-gIPGzmK4&list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB)
#
- APIs
    - LanguageTool: Writing style and grammar checker (https://pub.dev/packages/language_tool)

# Software to Install

- [AndroidStudio](https://developer.android.com/studio)
    - [Android Studio Youtube Guidance Tutorials](https://www.youtube.com/watch?v=EknEIzswvC0&list=PLS1QulWo1RIbb1cYyzZpLFCKvdYV_yJ-E)
- [Flutter](https://docs.flutter.dev/get-started/install) or [React Native](https://reactnative.dev/docs/environment-setup)
- [Firebase](https://firebase.google.com/docs/cli) or [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/downloads) 

# User Authentication

- [Google Sign-In & Firebase Authentication Using Flutter](https://blog.codemagic.io/firebase-authentication-google-sign-in-using-flutter/)
- [Super Simple Authentication Flow with Flutter & Firebase](https://codewithandrea.com/articles/simple-authentication-flow-with-flutter/)

# Timeline

- General:
    - Decide on Tech Stack **(Week 1)**
    - Download and set up environments **(Week 1 -2)**
    - Conduct research on writing tips that will be used in the app/unfamiliar jargon if there is any (using the links and resources below) **(Week 2 and throughout project as needed)**
    - Weekly meetings where the two teams update each other on progress and integrate properly
    - Presentation **(Week 8-10)**
- Front End:
    - Use Figma or Adobe XD to create mockups for the app **(Week 2)**
    - Learn Flutter Basics **(Week 2-3)**
    - Code UI/UX based on mockups
    - Login and Sign Up Screens **(Week 4)**
    - Homepage: My Worksheets (refer to MVP) **(Week 4) **
    - Planning Tab: Main Page, 8-Point Arc, Worldbuilding, and Character Questionnaire  interactive worksheets **(Week 5)**
    - Workshop Tab: text field to paste writing, display suggestions to user below text field **(Week 5)**
    - Help Tab: organize links according to their purpose/which stage of writing they concern **(Week 6)**
    - Integrating front and back end at each step
- Back End:
    - Learn Basics for Firebase and chosen API **(Weeks 1-3)**
    - Set up database to hold  
        - User profile information **(Week 3)**
        - Info from forms for Character Questionnaire, Worldbuilding, and 8-Point Arc (3 total planning worksheets) **(Weeks 5-7)**
        - Folders in the My Worksheets tab 
    - Create Infrastructure for 
        - The three planning worksheets **(Week 5)**
        - Creating folders in the My Worksheets tab **(Week 6)**
        - Storing and saving worksheets into folders **(Week 6-7)**
        - Integrate grammar checker API **(Week 6)**
    - Combining front and back end at each stage

# Additional Resources:

1. [https://thediscerningwriter.wordpress.com/2016/04/27/writing-for-prose-the-eight-point-arc/comment-page-1/#:~:text=The%20eight%20point%20arc%2C%20as,%2C%20climax%2C%20reversal%20and%20resolution.](https://thediscerningwriter.wordpress.com/2016/04/27/writing-for-prose-the-eight-point-arc/comment-page-1/#:~:text=The%20eight%20point%20arc%2C%20as,%2C%20climax%2C%20reversal%20and%20resolution.)
2. [https://authormarketinginstitute.com/3-small-changes-that-will-transform-your-writing-overnight/ (#2 in this article)](https://authormarketinginstitute.com/3-small-changes-that-will-transform-your-writing-overnight/)
3. [https://comewritewithus.com/9-tiny-changes-that-will-instantly-improve-your-writing-skills/ (#8)](https://comewritewithus.com/9-tiny-changes-that-will-instantly-improve-your-writing-skills/)


