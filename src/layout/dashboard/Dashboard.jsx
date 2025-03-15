import styled from "styled-components"

const Dashboard = () => {
    return(
        <DivStyled>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
        </DivStyled>
    )
}

export default Dashboard


const DivStyled = styled.div`
  border: 2px solid red;
  width: 50%;
  height: 300px;
  color: white;
  background-color: blue;
  margin: auto;
  margin-top: 70px;
`