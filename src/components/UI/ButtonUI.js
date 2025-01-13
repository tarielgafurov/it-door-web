import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';

const ButtonUI = ({ onClick , ...props}) => {
  return (
    <div>
      <ButtonStyled style={{...props}} onClick={onClick}  variant="contained">{props.children}</ButtonStyled>
    </div>
  )
};

export default ButtonUI


const ButtonStyled = styled(Button)`
  background-color: #2185D9;
  font-weight: 700;
  color: white;               
  border: none;
  border-radius: 4px;
  
 
  padding: ${(props) => props.padding || '10px 45px'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '5px'};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '19px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  color: ${(props) => props.color || '#fff'};
`
