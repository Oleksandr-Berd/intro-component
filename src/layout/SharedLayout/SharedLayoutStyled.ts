import styled from "styled-components";
import bgMobile from "../../assets/images/bg-intro-mobile.png"

export const SharedLayoutCustom = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 24px;
  padding-right: 24px;

  background: url(${bgMobile});
  background-color: #ff7979;
`;