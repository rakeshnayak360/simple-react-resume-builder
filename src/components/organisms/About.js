
import React from "react";
import styled from "styled-components";
import Title from "../molecules/Title";

const AboutGrid = styled.div`
    padding: 20px 20px 20px 0;

    p {
        line-height: 1.5em;
    }
`;
export default function aboutme({about}){
    return(
        <AboutGrid>
            <Title title={about.title} />
            <p>{about.description}</p>
        </AboutGrid>
    );
}