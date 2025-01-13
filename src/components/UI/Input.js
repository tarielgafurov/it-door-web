import React, { forwardRef } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';



const Input = forwardRef(({placeholder, type, onChange, key, value, id, label}, props , ref) => {
  return (
    <InputStyled ref={ref} type={type} placeholder={placeholder} onChange={onChange} key={key} value={value} id={id} label={label} style={{...props}} />
    
  )
})  

export default Input;

const InputStyled = styled(TextField)`
  width: ${(props) => props.width || "20.938rem" };
  top: ${(props) => props.Top || "20px"};

  @media (max-width: 375px) {
    width: 100%;
    padding: ${(props) => props.padding || '12px 0px'};
  }

` 

