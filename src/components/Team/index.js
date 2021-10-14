import React, { useState } from 'react';
import Icon1 from '../../images/teacher1.jpeg';
import Icon2 from '../../images/teacher2.jpeg';
import Icon3 from '../../images/teacher3.jpeg';
import {TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2, TeamP, HeroBtnWrapper, ArrowForward, ArrowRight} from './TeamElem';
import { Button } from '../ButtonElements';

 function Team() {
    const [hover, setHover] = useState(false);
  
    const onHover = () => {
      setHover(!hover);
    };
  return (
    <TeamContainer id='team'>
      <TeamH1>MEET OUR TEACHERS</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Icon1} />
          <TeamH2>Alice Persons</TeamH2>
          <TeamP><strong>Head Math Teacher/Founder</strong> </TeamP>
          <TeamP> Alice recieved her B.Ed from the University of Ottawa and she has been teaching for 20 years.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon2} />
          <TeamH2>Jenna Marison</TeamH2>
          <TeamP><strong>Gr5-8 Math Teacher</strong></TeamP>         
          <TeamP>Jenna recieved her B.Ed from the York University and she has been teaching for 5 years.</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon3} />
          <TeamH2>Alex Jones</TeamH2>
          <TeamP><strong>Gr9-12 Math Teacher</strong> </TeamP>
          <TeamP>Alex recieved his B.Ed from the University of Toronto and he has been teaching for 12 years.</TeamP>
        </TeamCard>
      </TeamWrapper>
      <HeroBtnWrapper>
          <Button to='/appointment' smooth={true} duration={500} spy={true} exact='true' offset={-80} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}> Book Appointment {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
    </TeamContainer>
  );
};

export default Team;