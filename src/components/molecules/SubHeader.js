import React from "react";
import styled from "styled-components";

const TitleText = styled.h3`
    text-transform: uppercase;
    margin-bottom: 5px;
`;


export default function SubHeader({title}) {
  return (
    <TitleText>{title}</TitleText> 
  );
  }