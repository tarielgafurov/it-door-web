import styled from "styled-components"
import forma from "..//assets/icons/forma.png"
import home from "../assets/icons/home.png"
import users from "../assets/icons/users.png"
import korzinka from "../assets/icons/korzinka.png"
import like from "../assets/icons/like.png"


const UsersUs = () =>{
    return(
        <InformationStyled>
            <H1Styled>
                 <h1>Немного о нас</h1>
            </H1Styled>
            <ItDoorFormaStyled>
                <div>
                    <ItDoorContentStyled src={forma} alt="" />
                    <h1>IT-DOOR</h1>
                </div>
            </ItDoorFormaStyled>
        <HomeInformation>
            <HomeUsersStyled>
                <div>
                    <img src={home} alt="" />
                    <span>Выпускаем Junior–разработчиков с 2022 года</span>
                </div>
                <div>
                    <img src={users} alt="" />
                    <span>Поддержка от преподавателей помогает эффективнее учиться</span>
                </div>
                    <KursStyled>Курсы It-Door — это прекрасная возможность погрузиться в профессию и освоить новую специальность всего за год.</KursStyled>
            </HomeUsersStyled>
            <LikeKorzinkaStyled>
                <div>
                    <img src={korzinka} alt="" />
                    <span>90% выпускников трудоустраиваются в первые месяцы после окончания обучения</span>
                </div>
                <div>
                    <img src={like} alt="" />
                    <span>Наши преподаватели – действующие разработчики с опытом от 3 лет</span>
                </div>
                <DivStyled></DivStyled>
            </LikeKorzinkaStyled>
        </HomeInformation>
        </InformationStyled>
    )
}
export default UsersUs


const InformationStyled = styled.div`
    width: 100%;
    width: 69.375rem;
    height: 42.938rem;
    margin: auto;
    background-color: rgba(4, 17, 36, 1);
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 100px;
    text-align: start;
    @media(max-width: 375px) {
    margin-top: 100px;
    text-align: start;
    @media(max-width: 375px) {
        /* border: 2px solid blue; */
        width: 375px;
        height: 500px;
        margin: auto;
    }
    @media(max-width: 834px) {
        width: 100%;
        height: 700px;
    }
`
const H1Styled = styled.div`
    width: 80%;
        /* margin: ; */
    }
`
const H1Styled = styled.div`
    width: 100%;
    >h1{
        text-align: start;
        font-family: Corbel;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
    }
    @media(max-width: 375px) {
        width: 100%;
        >h1{
            text-align: center;
            font-size: 17px;
        }
    }
    @media(max-width: 834px) {
        width: 100%;
        >h1{
            font-size: 28px;
            line-height: 39px;
            text-align: center;
        }
    }
`
const ItDoorFormaStyled = styled.div`
    width: 69.375rem;
    height: 20.125rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 1.875rem;
    background: linear-gradient(180deg, rgba(19, 50, 87, 0.75) 0%, rgba(26, 15, 29, 0.75) 100%);
    >div{
        width: 16.625rem;
        height: 9.625rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        >h1{
            font-size: 3em;
        }
    }
    @media(max-width: 375px) {
        width: 100%;
         
        >div{
            width: 90px;
            height: 80px;
            >h1{
                font-size: 21px;
                line-height: 25.36px;
            }
        }
    }
    @media(max-width: 834px) {
        width: 100%;
        height: 390px;
        >div{
            width: 100px;
            height: 100px;
            >h1{
                font-size: 22px;
            }
        }
    }
`
const ItDoorContentStyled = styled.img`
   width: 9.063rem;
    height: 5.366rem; 
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    }

    @media(max-width: 375px) {
        width: 70px;
        height: 70px;
    }
    
    @media(max-width: 834px) {
        width: 120px;
        
    }
`
const HomeInformation = styled.div`
    width: 69.375rem;
    height: 14.346rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 375px) {
        width: 375px;
        height: 1030px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
    @media(max-width: 834px) {
        width: 100%;
        height: 900px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        
    }
`
const HomeUsersStyled = styled.div`
    width: 32.625rem;
    height: 14.346rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    >div{
        border-radius: 15px;
        width: 100%;
        height: 4.125rem;
        text-align: start;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >img{
            width: 4.125rem;
            height: 4.125rem;
        }
        >span{
            text-align: start;
            width: 27rem;
            font-size: 18px;
            font-weight: 300;
            line-height: 19px;
            font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 335;
            font-style: normal;
        }

      
  }

    }
    
    @media(max-width: 375px) {
        width: 100%;
        height: 165px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        >div{
            width: 150px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            margin: 0;
            >img{
                width: 40px;
                height: 40px;
            }
            >span{
                text-align: center;
                width: 50px;
                line-height: 16px;
            }
        }
    }
    @media(max-width: 834px) {
        width: 100%;
        height: 150px;
        margin-top: 40px;
        >div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            >img{
                width: 40px;
                height: 40px;
            }
            >span{
                font-size: 15px;
                height: 40px;
                text-align: start;
                line-height: 22px;
                display: flex;
                align-items: center;
                width: 530px;
            }
        }
    }
`
const LikeKorzinkaStyled = styled.div`
    width: 32.625rem;
    height: 14.346rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    >div{
        border-radius: 15px;
        width: 100%;
        height: 4.125rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >img{
            width: 4.125rem;
            height: 4.125rem;
        }
        >span{
            width: 550px;
            font-size: 18px;
            font-weight: 300;
            line-height: 19px;
            font-optical-sizing: auto;
            font-weight: 335;
            font-style: normal;
        }

      
  }

    }
    @media(max-width: 375px) {
        width: 100%;
        height: 350px;
        >div{
            width: 100%;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            >img{
                width: 40px;
                height: 40px;
            }
            >span{
                line-height: 26px;
                font-size: 14px;
                width: 320px;
            }
        }
    }
    @media(max-width: 834px) {
        width: 100%;
        height: 300px;
        margin-top: 40px;
        >div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            >img{
                width: 40px;
                height: 40px;
            }
            >span{
                font-size: 15px;
                height: 40px;
                text-align: start;
                line-height: 22px;
                display: flex;
                align-items: center;
                width: 530px;
            }
        }
        
    }
`
const KursStyled = styled.span`
        width: 550px;
        font-size: 18px;
        color: rgba(122, 126, 147, 1);
        line-height: 1.188rem;
        font-family: "Raleway", sans-serif;
            font-optical-sizing: auto;
            font-weight: 335;
            font-style: normal;
            @media(max-width: 375px) {
                display: none;
            }
            @media(max-width: 834px) {
                display: none;
            }
    
`
const DivStyled = styled.div`
        width: 100%;
        height: 4.125rem;
        @media(max-width: 375px) {
            display: none;
        }
`