import React from 'react';
import styled from "styled-components";
import Title from '../molecules/Title';
import NonRatedElement from '../molecules/NonRatedElement';

const NonRatedGrid = styled.div`
    padding: 20px 20px 20px 0;
`;

export default function NonratedSkills({skills}){
    return(
        <NonRatedGrid>
            <Title title={skills.title} />
            <NonRatedElement name={skills.description} />
        </NonRatedGrid>
    )
}