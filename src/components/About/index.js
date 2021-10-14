import React from 'react';
import { AboutContainer,  AboutWrapper,  AboutRow,  AboutColumn1,  AboutColumn2,  AboutTextWrapper,  AboutTopLine,  AboutHeading,  AboutSubtitle,  AboutImgWrap, AboutImg} from './AboutElem';
import Icon1 from '../../images/testimonials.png';

const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutWrapper>
          <AboutRow>
            <AboutColumn1>
              <AboutTextWrapper>
                <AboutTopLine>Increasing All Students Math Skills</AboutTopLine>
                <AboutHeading>ABOUT US</AboutHeading>
                <AboutSubtitle>Founded in 2010, E-XLMath is an online tutoring service that guarantees students success by using the best teaching methods available. </AboutSubtitle>
                <AboutSubtitle>Following the Ontario Mathematics curriculum, our team of dedicated teachers will ensure an increase in math skills for any and all students.</AboutSubtitle>
              </AboutTextWrapper>
            </AboutColumn1>
            <AboutColumn2>
              <AboutImgWrap>
                <AboutImg src={Icon1}/>
              </AboutImgWrap>
            </AboutColumn2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
