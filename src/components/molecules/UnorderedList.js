import React from "react";
import styled from "styled-components";
import ListDescription from "./ListDescription";

const Unordered=styled.ul`
    margin-left: 30px;

    li{
      line-height: 1.5em;
      padding-bottom: 5px;
    }
`;

export default function UnorderedList({list=[] }) {
  return (
    <Unordered><ListDescription list={list} /></Unordered> 
  );
  }