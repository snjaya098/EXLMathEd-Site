import styled from 'styled-components';

export const PriceContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const PriceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`;

export const PriceCard = styled.div`
  background: #004F98;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 280px;
  height: 540px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PriceIcon = styled.div`
  margin-bottom: 20px;
  font-size: 3.5rem;
`;

export const PriceH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  font-weight: 600;
  color: #004F98;
`;

export const PriceH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const PriceH3 = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const PriceP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px 32px;
`;

export const PriceD = styled.p`
  font-size: 1rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px 0px 32px;
`;
