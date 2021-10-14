import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #fff;
  background: #004F98;
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
`;

export const AboutColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const AboutColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const AboutTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const AboutTopLine = styled.div`
  color: #FFDF00;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const AboutHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
`;

export const AboutSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const AboutImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const AboutImg = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;