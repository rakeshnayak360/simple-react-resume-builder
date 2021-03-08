import React from "react";
import styled from "styled-components";
import {IconHolder, IconText } from '../atom/styles';

const IconDiv = styled.div`
  height: 20px;
  padding: 10px 0;
`;

export default function IconValue({Icon, value}) {
  return (
         <IconDiv>
            <IconText>{value}</IconText>
            <IconHolder><Icon /></IconHolder>
         </IconDiv>
  );
}
