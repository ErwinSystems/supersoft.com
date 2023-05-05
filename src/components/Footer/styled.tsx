import styled from "styled-components";
import theme from "@styles/theme";
const FooterRoot = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.blue[800]};
  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterMenu = styled.div`
   display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  list-style: none;
  width: 60%;
  ul{
    li{
      margin-bottom: 10px;
    }
  }
  
  a{
    color:#fff;
    font-weight: bold;
    :hover{
      text-decoration: underline;
    }
  }
 
  div:last-child{
    grid-column-start:3;
  grid-column-end: 4; 
  grid-row: 1; 
  text-align: right;
  
  
 
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const FooterMenuItem = styled.div`

 h3{
    color:#fff;
    font-size: 14px;
    margin-bottom: 24px;
    font-weight: normal;
 }
`;


export { FooterRoot, FooterMenu, FooterMenuItem };