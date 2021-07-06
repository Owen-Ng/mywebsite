import Bar from '../../components/Bar-subpages/Bar';
import Slides from '../../components/Slides/Projects-slides';
export default function Projects() {
  
  return (
    <div>
      <Bar title="Projects" name="Owen"></Bar>
      <Slides
        description={
        `    Built a webapp allowing user to know approximately how long it will take to receive their pickup deliveries and to share groceries lists amongst families through invitation.
    Implemented a middleware layer to utilize MongoDB backend to store user and graphical data.
    Created API on the backend to fetch information from Project Ceres database.
    React Leaflet was used to create a responsive map displaying groceries stores information.
    The backend was built using NodeJS, express and CORS API. The frontend was built using Reactjs and React Leaflet API.
    Restricted members’ submission times within 24 hours to prevent the users from overfitting the estimation time.`}
        title="    Project Ceres"
        githublink="https://github.com/Owen-Ng"
        projectlink="https://projectceresv2.herokuapp.com/"
        projectImage ="./images/ceres.png"
        date="2020"
      />
      
      <Slides
      description={`    Implemented a Javascript widget that provides an innovative way for users to navigate websites and view information.
    Deployed a supporting documentation site for users.`}
      title="    HeadJS"
      githublink="https://github.com/Owen-Ng/HeadJS"
      projectlink="https://headjs.herokuapp.com/landingpage.html"
      projectImage ="./images/jslogo.jpg"
      date="2020"
    />

    <Slides
      description={
        `    Passing in a wave file into the apps to create a new wave file with different effects such as fadeIn, fadeOut and pan effects left to right sound effect.
    Implemented using C`}
      title="    Audio-Modifier"
      githublink="https://github.com/Owen-Ng/Audio-Modifier"
      date="2020"
    />

<Slides
      description={`  Search movies, nominate movies`}
      title="    Movie Listing"
      githublink="https://github.com/Owen-Ng/Owen-Ng.github.io/tree/master/moviesite"
      projectlink="https://owen-ng.github.io/moviesite/index.html"
      date="2021"
    />

<Slides
      description={`  Just a Pong game in JAVA. Playable with AI`}
      title="    Pong"
      githublink="https://github.com/Owen-Ng/Pong"
      date="2019"
    />
    <Slides
      description={`    A python script that passed in excel files to be converted into a pdf file to create receipts for customers.`}
      title="    Automated-receipts"
      githublink="https://github.com/Owen-Ng/Automated-receipts"
      date="2020"
    />
    <Slides
      description={`    Windows form TicTacToe Application in C++`}
      title="    TicTacToe"
      githublink="https://github.com/Owen-Ng/TicTacToe"
      date="2021"
    />

<Slides
      description={`    I thought it was quite hard to write the vscode snippet manually and I could not find anything that would just convert a code to a formated vs code snippet so I just create a little web app for that.`}
      title="    VsCodeSnippet"
      githublink="https://github.com/Owen-Ng/VsCodeSnippet"
      projectlink="https://owen-ng.github.io/VsCodeSnippet"
      date="2021"
    />
    </div>
  );
}
