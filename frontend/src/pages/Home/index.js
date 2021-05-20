import './index.css';
import Bar from '../../components/Bar/Bar';
import Main from '../../components/Main-page/Main';
import Slides from '../../components/Slides/Slides';
import Contact_slide from '../../components/Slides/Contact-slide';
export default function Home() {
  return (
    <div>
      <Bar name={'Owen'} />
      <Main name={'Owen'} />
      <Slides
        title="Projects"
        description="AWDWADJWADOWDAD
      awdwdadawdawdadwadadwadwadadadwadwdwdwawd"
      />

      <Slides
        title="Work Experiences"
        description="AWDWADJWADOWDAD
      awdwdadawdawdadwadadwadwadadadwadwdwdwawd"
      />

      <Contact_slide
        title="Contacts"
        description="AWDWADJWADOWDAD
    awdwdadawdawdadwadadwadwadadadwadwdwdwawd"
      />

      <Slides
        title="About"
        description="AWDWADJWADOWDAD
      awdwdadawdawdadwadadwadwadadadwadwdwdwawd"
      />
    </div>
  );
}
