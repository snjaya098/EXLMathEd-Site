import styled from 'styled-components';

export const ContactContainer = styled.div`
  color: #fff;
  background: #004F98;
`;

export const ContactWrapper = styled.div`
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

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
`;

export const ContactColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 50px;
  grid-area: col1;
`;

export const ContactColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 50px;
  grid-area: col2;
`;

export const ContactTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ContactTopLine = styled.div`
  color: #FFDF00;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ContactHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
`;

export const ContactSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const ContactImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const ContactImg = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  background: #010606;
  max-width: 400px;
  height: 510px;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #FFDF00;
  color: #010606;
  padding: 7px 0;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
`;