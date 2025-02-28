import Select from '@mui/material/Select';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';

const SelectUi = (props) =>{
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const handleChange = (e) =>{
    setSelectedLanguage(e.target.value)
  }

  return(
    <>
      <SelectStyled value={selectedLanguage || ``} onChange={handleChange}>
              <MenuItem value={props.value || `Kyrgyz`}>Kyrgyz</MenuItem>
              <MenuItem value={props.value || `Russia`}>Russia</MenuItem>
              <MenuItem value={props.value || `English`}>English</MenuItem>
    </SelectStyled>

    </>
  )
}

export default SelectUi


const SelectStyled = styled(Select)`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`