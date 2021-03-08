import React from "react";
import styled from "styled-components";
import IconValue from '../molecules/IconValue';
import LabelValue from '../molecules/LabelValue';

import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import SocialMedia from '../molecules/SocialMedia';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const PersonalInfo = styled.div`
  border-bottom: solid #ccc 1px;
  display: flex;
  padding-bottom: 10px;
`;

const PersonName = styled.h1`
  text-transform: uppercase;
  margin: 0 0 10px;
  font-weight: 500;
  color: #3f51b5;
`;

const ContactInfo = styled.div`
  float:right;
  text-align: right;
  flex-basis: 40%;
  margin-left: auto;
`;

const PersonRole = styled.p`
  padding: 0;
  margin: 0 0 10px;
`;

const PersonData = styled.div`
  float:left;
`;

export default function Introduction({personalDetails}) {
  return (
     <React.Fragment>
      <PersonalInfo>
          <PersonData>
            <PersonName>{personalDetails.name}</PersonName>
            <PersonRole>{personalDetails.role}</PersonRole>
            <LabelValue text={personalDetails.experience[0].type} value={personalDetails.experience[0].years} />
            <LabelValue text={personalDetails.experience[1].type} value={personalDetails.experience[1].years} />
          </PersonData>
          <ContactInfo>
              <IconValue Icon={CallIcon} value={personalDetails.mobile} />
              <IconValue Icon={MailIcon} value={personalDetails.email} />
              <IconValue Icon={LocationOnIcon} value={personalDetails.location} />
          </ContactInfo>
      </PersonalInfo>

      <SocialMedia linkedin={personalDetails.linkedin} github={personalDetails.github} />
     </React.Fragment>
  );
}
