import React from 'react';
import styled from 'styled-components';
import Badges from '../atom/Badges';

export default function NonRatedElement({ name=[] }){
    return (
        name.map((item,key) => {
            return <Badges name={name} key={name}>{item}</Badges>
        })
    )
}