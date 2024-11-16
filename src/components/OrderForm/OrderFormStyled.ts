import { Field } from "formik";
import styled from "styled-components";

export const OrderCon = styled.div``;

export const OrderContent = styled.div`
  text-align: center;

  padding-left: 67px;
  padding-top: 18px;
  padding-right: 66px;
  padding-bottom: 18px;

  margin-bottom: 24px;

  font-family: "Poppins";
  font-size: 15px;
  line-height: 1.73;
  letter-spacing: 0.27px;

  background-color: #5e54a4;
  color: #fff;

  border-radius: 10px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06),
    0 0 20px 2px rgba(255, 117, 140, 0.5),
    inset 0 0 15px 5px rgba(255, 255, 255, 0.3);

  & span {
    font-weight: 300;
  }
`;

export const FormCon = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  margin-bottom: 8px;

  background-color: #fff;

  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06),
    0 0 20px 2px rgba(255, 117, 140, 0.5),
    inset 0 0 15px 5px rgba(255, 255, 255, 0.3);
`;

export const InputCon = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(19px, 15px);
    transition: transform 0.2s ease;
    pointer-events: none;

    font-family: "Poppins";
    font-weight: 600;
    font-size: 14px;
    line-height: 1.63;
    letter-spacing: 0.25px;

    color: #3d3b48;
  }

  & input:focus,
  & input:active {
    outline: none;
  }

  & input {
    width: 100%;
    padding-left: 19px;
    padding-top: 15px;
    padding-bottom: 15px;

    border: 1px solid #3d3b48;
    border-radius: 5px;
  }

  &:focus-within label {
    transform: translate(19px, -18px);
  }

  .error {
    color: red;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;

  text-align: center;

  padding-top: 15px;
  padding-bottom: 15px;

  margin-bottom: 8px;

  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 15px;
  line-height: 1.73;
  font-weight: 600;

  background-color: #38cc8b;
  color: #fff;

  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06),
    0 0 20px 2px rgba(255, 117, 140, 0.5),
    inset 0 0 15px 5px rgba(255, 255, 255, 0.3);
`;

export const Terms = styled.div`
padding-left: 15px;
padding-right: 15px;

  text-align: center;

  font-family: "Poppins";
  font-size: 11px;
  line-height: 1.91;

  color: #bab7d4;

  & span {
    font-weight: 800;
    color: #ff7979;
  }
`;
