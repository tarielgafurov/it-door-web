// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import ItDoor_Logo from "./It-Door_Logo.png"

// const SideBar = () => {
//   return (
//     <SidebarStyled>
//       <img src={ItDoor_Logo} alt="" />
//       <div>
//         <Link to="/dashboard"><h2>Наши менторы</h2></Link>
//         <Link to="/dashboard/requests"><h2>Заявки</h2></Link>
//         <Link to="/dashboard/office"><h2>Наш офис</h2></Link>
//       </div>
//       <Outlet/>
//     </SidebarStyled>
//   );
// };

// export default SideBar;

// const SidebarStyled = styled.div`
//     border-radius: 30px;
//     border: 3px solid violet;
//     margin-top: 20px;
//     width: 286px;
//     height: 915px;
//     display: flex;
//     transform: translateX(20px);
//     box-shadow: rgba(248, 247, 247, 0.258) 0px 3px 6px, rgba(253, 252, 252, 0.304) 0px 3px 6px;
//     > img { 
//       width: 117px;
//       height: 39px;
//       margin-top: 30px;
//     }

//     > div {
//         width: 250px;
//         margin: auto;
//         margin-top: 40px;
//         display: flex;
//         text-align: left;
//         flex-direction: column;

//         > a {
//             text-decoration: none;
//             color: white;
//         }
        
//         > a:focus h2 {
//             color: red;
//             cursor: pointer;
//         }

//         > a:active h2{
//             color: darkred;
//         }
//     }
// `;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ItDoor_Logo from "./It-Door_Logo.png";

const SideBar = () => {
  return (
    <SidebarStyled>
      <img src={ItDoor_Logo} alt="Logo" />
      <div>
        <Link to="/dashboard"><h2>Наши менторы</h2></Link>
        <Link to="/dashboard/requests"><h2>Заявки</h2></Link>
        <Link to="/dashboard/office"><h2>Наш офис</h2></Link>
      </div>
    </SidebarStyled>
  );
};

export default SideBar;

const SidebarStyled = styled.div`
    border-radius: 30px;
    border: 3px solid violet;
    margin-top: 20px;
    width: 286px;
    height: 915px;
    display: flex;
    transform: translateX(20px);
    box-shadow: rgba(248, 247, 247, 0.258) 0px 3px 6px, rgba(253, 252, 252, 0.304) 0px 3px 6px;
    
    > img { 
      width: 117px;
      height: 39px;
      margin-top: 30px;
    }

    > div {
        width: 250px;
        margin: auto;
        margin-top: 40px;
        display: flex;
        text-align: left;
        flex-direction: column;

        > a {
            text-decoration: none;
            color: white;
        }
        
        > a:hover h2 {
            color: red;
            cursor: pointer;
        }

        > a:active h2{
            color: darkred;
        }
    }
`;
