import React from "react";
import styled from "styled-components";
import RatingStars from '../atom/stars';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const RatedData = styled.div`
    margin-bottom: 10px;
`;

const RatedName = styled.span`
    vertical-align: top;
    font-weight: 600;
    display: inline-block;
    width: 170px;
    vertical-align: middle;
`;

const RatedRating = styled.span`
    display: inline-block;
    vertical-align: middle;

    svg{
        font-size: 2em;
    }
`;

export default function RatedElement({name, value}) {
    const stars = [];
  for (let i = 1; i <= 5; i++) {
      stars.push(i <= value ? <StarRoundedIcon color="primary" /> : <StarBorderRoundedIcon />)
    //stars.push(<RatingStars filled={i <= value} key={i} />);
  }

  return (
      <RatedData>
          <RatedName>{name}</RatedName>
          <RatedRating>{stars}</RatedRating>
      </RatedData>
  );
}
