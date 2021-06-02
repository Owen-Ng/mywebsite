import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import Description from './layout/Description';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TiltButton from './layout/Button';
import './Slides.css';

import React, { useEffect, useRef } from 'react';

export default function (props) {
  return (
    <div className="Slides-container">
      <div className="left-box">
        <Logo title={props.title} />
        <div className="icons-slides">
          <TiltButton>
            <LinkedInIcon id="linkedin" />
          </TiltButton>
          <TiltButton>
            <GitHubIcon id="github" />
          </TiltButton>
          <TiltButton>
            <MailOutlineIcon id="mail" />
          </TiltButton>
          <TiltButton>
            <FacebookIcon id="facebook" />
          </TiltButton>
          <TiltButton>
            <TwitterIcon id="twitter" />
          </TiltButton>
          <TiltButton>
            <InstagramIcon id="instagram" />
          </TiltButton>
        </div>
      </div>

      <div className="right-box">
        <Description description={props.description} />
      </div>
    </div>
  );
}
