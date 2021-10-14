import React from 'react';
import { ImBook } from 'react-icons/im';
import { ImBooks } from 'react-icons/im';
import { ImFilm } from 'react-icons/im';
import {
  PriceContainer,
  PriceH1,
  PriceWrapper,
  PriceCard,
  PriceIcon,
  PriceH2, PriceH3,
  PriceP, PriceD
} from './PriceElem';

const Price = () => {
  return (
    <PriceContainer id='price'>
      <PriceH1>PRICES AND PACKAGES</PriceH1>
      <PriceWrapper>
        <PriceCard>
          <PriceIcon> <ImBook /> </PriceIcon>
          <PriceH2>Starter Pack</PriceH2>
          <PriceH3>$85</PriceH3>
          <PriceP><strong>for 6 classes</strong></PriceP>
          <PriceD>1.5 hour live sessions with a teacher</PriceD>
          <PriceD>Daily homework and assesments as extra practice</PriceD>
          <PriceD>Instant homework help and test prep</PriceD>
        </PriceCard>
        <PriceCard>
          <PriceIcon> <ImBooks /> </PriceIcon>
          <PriceH2>Bundle Pack</PriceH2>
          <PriceH3>$170</PriceH3>
          <PriceP><strong>for 15 classes</strong></PriceP>
          <PriceD>Same features as the starter pack, but save more money</PriceD>
          <PriceD>Additional help in preparation for Math Exams, Contests and Olympiads</PriceD>
          <PriceD>Access to many more practice exams</PriceD>
        </PriceCard>
        <PriceCard>
          <PriceIcon> <ImFilm /> </PriceIcon>
          <PriceH2>Asynchronous Pack</PriceH2>
          <PriceH3>$50</PriceH3>
          <PriceP><strong>a week</strong></PriceP>
          <PriceD>Study at your own pace</PriceD>
          <PriceD>Curriculum divided into topics and accessed as online modules</PriceD>
          <PriceD>Daily homework, quizzes and assesments as extra practice</PriceD>
        </PriceCard>
      </PriceWrapper>
    </PriceContainer>
  );
};

export default Price;
