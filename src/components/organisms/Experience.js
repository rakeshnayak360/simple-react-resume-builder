import React from "react";
import Title from '../molecules/Title';
import SubHeader from '../molecules/SubHeader';
import SubText from '../molecules/SubText';
import UnorderedList from '../molecules/UnorderedList';
import styled from "styled-components";

const ExperienceGrid = styled.div`
    padding: 20px;
`;

const CompanyGroup = styled.div`
    margin-bottom: 20px;
`;

export default function Experience({experience}) {
  return (
     <ExperienceGrid>
         <Title title={experience.title} />
         {experience.companyList.map((item,key) => {
             return(
                 <CompanyGroup>
                    <SubHeader title={item.name} />
                    <SubText title={item.role + ' / '+ item.expYears + ' / '+ item.years} />
                    {item.description.map((subitem, key) => { 
                        return (
                            <UnorderedList list={subitem} />
                        );
                    }) } 
                 </CompanyGroup>
             )
         }) }
     </ExperienceGrid>
  );
}
