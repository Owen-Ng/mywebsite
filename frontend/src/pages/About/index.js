import Bar from '../../components/Bar-subpages/Bar';
import Footer from './layout/Footer';
import './index.css';
import Description from '../../components/Description';
export default function About() {
  return (
    <div>
      <Bar title="About" name="Owen"></Bar>
      <div id="Footer-container">
        <Description>
          {`awdawdwda wdwad awdwdadawdawdadwadadwadwadadadwadwdwdwawdaw
          awdwadwadwadawdwadawdwadawdaw
          awdwdadawdawdadwadadwadwadadadwadwdwdwawd
          awdwdadawdawdadwadadwadwadadadwadwdwdwawd` + 'ahello'}
        </Description>

        <h2>Hobbies:</h2>
      </div>
      <Footer>Made with Love</Footer>
    </div>
  );
}
