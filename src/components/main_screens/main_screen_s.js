import styled from "styled-components";

export const Wrapper = styled.div`
background-color:#f5f5f5;
`

export const Body = styled.div`
  margin-left: calc(50vw - 700px);
  margin-right: calc(50vw- 700px);
  height: 100vh;
  width: 1440px;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
`;
export const MainContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const ModulBox = styled.div`
display: flex;
  flex-direction: column;
  gap:50px;
  align-items: center;
  padding-top:30px;
`

export const LeftMenu = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #3b83bd;
 
  padding-bottom: 30px;
  align-items: center;
`;

export const Logo = styled.img`
  color: green;
  width: 225px;
  height: 105px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #a17774 ;
  padding-left: 50px;
  padding-right: 30px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  background-color: #d5d5d5;
`;

export const Footer = styled.footer`
  background-color: #d7d7d7;
`;
