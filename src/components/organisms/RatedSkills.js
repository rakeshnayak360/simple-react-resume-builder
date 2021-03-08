
import React from "react";
import styled from "styled-components";
import Title from '../molecules/Title';
import RatedElement from '../molecules/RatedElement';

const RatedGrid = styled.div`
    padding: 20px 20px 20px 0;
`;

export default function RatedSkills({skills}){
    return(
        <RatedGrid>
            <Title title={skills.title} />
            {skills.description.map((item,key) => {
                return <RatedElement name={item.name} value={item.rating} />
            })}
        </RatedGrid>
    )
}