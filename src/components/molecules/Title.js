import React from "react";
import styled from "styled-components";

const TitleText = styled.h2`
    text-transform: uppercase;
    margin-bottom: 15px;
    color: #3f51b5;
`;


export default function Title({title}) {
  return (
    <TitleText>{title}</TitleText> 
  );
}
