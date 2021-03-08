import React from "react";
import styled from "styled-components";

import IconValue from '../molecules/IconValue';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const SocialDiv = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
`;

export default function SocialMedia({ linkedin, github }) {
  return (
    <SocialDiv>
      {linkedin && <div className="linkedin">
        <span>
          <a target="_blank" rel="noopener noreferrer" href={"http://linkedin.com/in/" + linkedin}>
          <IconValue Icon={LinkedInIcon} value={linkedin} />
          </a>
        </span>
      </div>}
      {github &&
      <div className="github">
        <span>
          <a target="_blank" rel="noopener noreferrer" href={"http://github.com/" + github}>
          <IconValue Icon={GitHubIcon} value={github} />
          </a>
        </span>
      </div>}
    </SocialDiv>
  );
}
