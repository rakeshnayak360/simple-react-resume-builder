import React from "react";
import styled from "styled-components";

const TitleText = styled.p`
    text-transform: uppercase;
    color: #555;
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 600;
`;


export default function SubHeader({title}) {
  return (
    <TitleText>{title}</TitleText> 
  );
  }