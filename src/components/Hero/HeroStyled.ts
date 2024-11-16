import styled from "styled-components";

export const HeroCon = styled.div`
  margin-bottom: 64px;

  text-align: center;

  & > h3 {
    margin-bottom: 16px;

    font-family: "Poppins";
    font-size: 28px;
    line-height: 1.29;
    letter-spacing: -0.29px;
    font-weight: 700;

    color: #fff;
  }

  & > p {
    font-family: "Poppins";
    font-size: 16px;
    line-height: 1.63;

    color: #fff;
  }

  @media (min-width: 1220px) {
    width: 500px;

    margin: 0;
    margin-right: 73px;
    text-align: left;

    & > h3 {
      margin-bottom: 11px;

      font-size: 50px;
      line-height: 1.1;
      letter-spacing: -0.52px;
    }
  }
`;
