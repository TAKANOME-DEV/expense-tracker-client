import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 500px;
  height: auto;
  padding: 40px 50px;
  border-radius: 10px;
  @media (min-width: 404px) and (max-width: 540px) {
    width: 100%;
    height: auto;
    margin: 0 30px;
    padding: 40px 20px;
  }
  @media (max-width: 403px) {
    width: 100%;
    height: auto;
    margin: 0 20px;
    padding: 40px 15px;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row-reverse;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  align-self: center;
  position: absolute;
  left: 45%;
  @media (min-width: 404px) and (max-width: 540px) {
    left: 30%;
  }
  @media (max-width: 404px) {
    left: 25%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  font-size: 28px;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 8px 10px;
  border-radius: 10px;
  outline: none;
  width: 100%;
  margin-bottom: 20px;
`;
