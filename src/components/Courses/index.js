import React, { useState } from 'react';
import Icon1 from '../../images/gr5math.png';
import Icon2 from '../../images/gr6math.png';
import Icon3 from '../../images/gr7math.png';
import Icon4 from '../../images/gr8math.png';
import Icon5 from '../../images/gr9math.png';
import Icon6 from '../../images/gr10math.png';
import Icon7 from '../../images/gr11math.png';
import Icon8 from '../../images/gr12math.png';
import { CourseContainer, CourseH1, CourseWrapper, CourseCard, CourseIcon, CourseH2, CourseP, CourseBtnWrapper, ArrowForward, ArrowRight} from './CourseElem';
import { Button } from '../ButtonElements';


function Courses() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <CourseContainer id='courses'>
      <CourseH1>COURSES OFFERED</CourseH1>
      <CourseWrapper>
        <CourseCard>
          <CourseIcon src={Icon1} />
          <CourseH2>Grade 5 Math</CourseH2>
          <CourseP>Covers topics found in the Grade 5 Math curriculum</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon2} />
          <CourseH2>Grade 6 Math</CourseH2>
          <CourseP>Covers topics found in the Grade 6 Math curriculum</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon3} />
          <CourseH2>Grade 7 Math</CourseH2>
          <CourseP>Covers topics found in the Grade 7 Math curriculum</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon4} />
          <CourseH2>Grade 8 Math</CourseH2>
          <CourseP>Covers topics found in the Grade 8 Math curriculum</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon5} />
          <CourseH2>Grade 9 Math</CourseH2>
          <CourseP>We offer both the Academic and Applied streams</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon6} />
          <CourseH2>Grade 10 Math</CourseH2>
          <CourseP>We offer both the Academic and Applied streams</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon7} />
          <CourseH2>Grade 11 Math</CourseH2>
          <CourseP>We offer courses in both University and College streams</CourseP>
        </CourseCard>
        <CourseCard>
          <CourseIcon src={Icon8} />
          <CourseH2>Grade 12 Math</CourseH2>
          <CourseP>We offer Adv.Functions, Calculus, Data and College Math</CourseP>
        </CourseCard>
      </CourseWrapper>
      <CourseBtnWrapper>
          <Button to='/register' smooth={true} duration={500} spy={true} exact='true' offset={-80} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}> Register {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CourseBtnWrapper>
    </CourseContainer>
  );
};

export default Courses;
