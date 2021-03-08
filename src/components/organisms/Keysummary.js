import React from "react";
import styled from "styled-components";
import Title from '../molecules/Title';
import UnorderedList from '../molecules/UnorderedList';

const KeySummaryGrid = styled.div`
    padding: 20px;
`;

export default function Keysummary({ summary }) {
  return (
    <KeySummaryGrid>
        <Title title={summary.title} />
        {summary.description.map((item,key) => {
            return <UnorderedList list={item} />
        })}
        
    </KeySummaryGrid>
  );
  }