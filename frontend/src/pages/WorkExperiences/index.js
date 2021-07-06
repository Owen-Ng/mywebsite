import Bar from '../../components/Bar-subpages/Bar';
import './index.css';
import Container from './layout/Container';
export default function WorkExperiences() {
  return (
    <div>
      <Bar title="Work Experiences" name="Owen"></Bar>
      <div className="work-slider">
        <Container img="/images/housee.jpg" title="Software Developer" company="Housee Technologies" date="January 2021 - April 2021">
          {`• Maintained the middleware layer for frontend development and made changes to the database for
the customers to interact with.
• Created backend API to fetch information from Housee Technologies database.
• Implemented the backend and frontend using ReactJS, Typescript, CSS, NodeJS, and
MongoDB.
• Improved the load time of the listing page by 99% by modifying the backend schemas and data
structures.`}
        </Container>
        <Container img="/images/uoft.png" title="Teaching Assistant" company="University of Toronto" date="January 2021 - April 2021">
          {`• Taught web development framework/programming namely JavaScript, CSS, HTML, PHP,
NodeJs, and ReactJs to a class of 40 students through exercises and lectures.
• Collaborated with professor to create lessons around the curriculum and for upcoming tutorials.`}
        </Container>
        <Container img="/images/Oslyn.jpg" title="Software Developer" company="Oslyn" date="May 2020 - September 2020">
          {`• Implemented the design layout for the cross-platform mobile app, the backend native module and
the webpage using React Native, ReactJs, CSS, Java, Android Studio and JavaScript.
• Created a bridge between the backend Native module to the frontend to enable AI functionality.
• Managed agile workflow with Jira and Clickup to increase productivity and efficiency.`}
        </Container>
      </div>
    </div>
  );
}
