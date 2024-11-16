import styled from "styled-components";
import bgMobile from "../../assets/images/bg-intro-mobile.png"

export const SharedLayoutCustom = styled.div`

  padding-left: 24px;
  padding-top: 88px;
  padding-right: 24px;
  padding-bottom: 68px;

  background: url(${bgMobile});
  background-color: #ff7979;

  @media (min-width: 1220px){
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0;
  }
`;