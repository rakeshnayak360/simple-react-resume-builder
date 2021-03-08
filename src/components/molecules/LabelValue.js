import React from "react";
import styled from "styled-components";

const LabelDiv = styled.div`
    padding: 5px 0;
`;

const LabelText = styled.span``;

const LabelVal = styled.span`
    font-weight: bold;
`;

export default function LabelValue({text, value}) {
  return (
        <LabelDiv>
          <LabelText dangerouslySetInnerHTML={{ __html: text }} /> 
          <LabelVal dangerouslySetInnerHTML={{ __html: value }} />
        </LabelDiv>
  );
}
