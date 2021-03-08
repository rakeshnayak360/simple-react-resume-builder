import React from 'react';
import styled from 'styled-components';
import SubHeader from '../molecules/SubHeader';
import SubText from '../molecules/SubText';
import Title from '../molecules/Title';

const EducationGrid = styled.div`
    padding: 20px 20px 20px 0;
`;

export default function Education({education}){
    return(
        <EducationGrid>
            <Title title={education.title} />
            <SubHeader title={education.description[0].specialization} />
            <SubText title={education.description[0].degree +' / '+ education.description[0].years} />
            <p>{education.description[0].institution}</p>
            <SubHeader title={education.description[0].grade} />
        </EducationGrid>
    )
}