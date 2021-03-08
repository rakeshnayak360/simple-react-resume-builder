import React from 'react';
import styled from 'styled-components';
import Title from '../molecules/Title';
import LabelValue from '../molecules/LabelValue';


export default function ListDescription({list=[]}){
    return (
            <li dangerouslySetInnerHTML={{ __html: list }}  />
    )
}