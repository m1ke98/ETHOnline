import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button as BaseButton} from "@mui/material";



export const SignInButton = styled(BaseButton)`
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;


export const PageHeader = styled.span`
  align-items: center;
  background-color: #282c34;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`;



export const MintBody = styled.div`
  align-items: top;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Body = styled.div`
  align-items:center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Title = styled.div`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 4vmin);
  justify-content: center;
`;

export const TitleIcon = styled.div`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  margin-right: 0.3rem;
  font-size: calc(10px + 2vmin);
  justify-content: center;
`;


export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const QuizImage = styled.img`
  height: 40vmin;
  pointer-events: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
`;

export const StdLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  color: #CD5C5C;
  margin: 20px;
  text-decoration: none;
  font-size: 20px;
`;

export const SpecialLink = styled(Link)`
  color: #CD5C5C;
  display: flex;
  margin: 20px;
  text-decoration: none;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

export const QuizBody = styled(Body)`
  justify-content: flex-start;
`;