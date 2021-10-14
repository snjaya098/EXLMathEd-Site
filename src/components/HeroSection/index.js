import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP1, HeroP2, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElem';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>E-XLMath</HeroH1>
        <HeroP1>
          <strong>Excellent</strong> mathematics education to <strong>Excel</strong> your skills.
        </HeroP1>
        <HeroP2>
          For more details about our services, please book an appointment with our team.
        </HeroP2>
        <HeroBtnWrapper>
          <Button to='/appointment' smooth={true} duration={500} spy={true} exact='true' offset={-80} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}> Book Appointment {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
