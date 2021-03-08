import React from "react";
import styled from "styled-components";
import Introduction from '../organisms/Introduction'; 
import Experience from '../organisms/Experience';
import Keysummary from '../organisms/Keysummary';
import About from '../organisms/About';
import RatedSkills from '../organisms/RatedSkills';
import NonratedSkills from '../organisms/NonratedSkills';
import Education from '../organisms/Education';
import ListDescription from "../molecules/ListDescription";

const ResumeContainer = styled.div`
  padding: 30px;
  width: 1140px;
  margin: auto;
  background: #ffffff;
`;

const ResumeGridContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 1fr 66%;
`;


const ResumeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Divider = styled.div`
  height: 100%;
  max-width: 1px;
  background-color: #ccc;
`;

const Separator = styled.div`
  border-bottom: solid #ccc 1px;
`;

export default function ResumeTemplate({ data }) {
  return (
      <ResumeContainer>
         <Introduction personalDetails={data.personal_details} />  
         <ResumeGridContainer>
           <ResumeColumn>
              <About about={data.aboutme} />
              <Separator /> 
              <About about={data.career} />
              <Separator /> 
              {/* <About about={data.career} /> */}
              <RatedSkills skills={data.skills} />
              <Separator /> 
              <NonratedSkills skills={data.expertise} />
              <Separator /> 
              <NonratedSkills skills={data.methodology} />
              <Separator /> 
              <Education education={data.education} />
           </ResumeColumn>
           <Divider /> 
           <ResumeColumn>
            <Experience experience={data.companyDetails} />
            <Separator />
            <Keysummary summary={data.key_projects} />
            <Separator />
            <Keysummary summary={data.certificates} />
           </ResumeColumn>
         </ResumeGridContainer>
         {/* 
         <Education education={data.education}  /> */}
      </ResumeContainer>
  );
}
