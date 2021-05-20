import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import Description from './layout/Description';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Slides.css';

import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
export default function (props) {
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };
  return (
    <div className="Slides-container">
      <div className="left-box">
        <Logo title={props.title} />
        <div className="icons-slides">
          <Tilt options={options}>
            <LinkedInIcon id="linkedin" />
          </Tilt>
          <Tilt options={options}>
            <GitHubIcon id="github" />
          </Tilt>
          <Tilt options={options}>
            <MailOutlineIcon id="mail" />
          </Tilt>

          <Tilt options={options}>
            <FacebookIcon id="facebook" />
          </Tilt>
          <Tilt options={options}>
            <TwitterIcon id="twitter" />
          </Tilt>
          <Tilt options={options}>
            <InstagramIcon id="instagram" />
          </Tilt>
        </div>
      </div>

      <div className="right-box">
        <Description description={props.description} />
      </div>
    </div>
  );
}
