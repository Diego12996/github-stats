import styled from '@emotion/styled'
import { RiSearchFill, RiUserFill, RiStarFill } from "react-icons/ri";




function Footer() {

  const NavIcon = styled.div`
    backgorund-color: #F2F2F2;
    display: flex;
    justify-content: space-evenly;
  `

  const Icon = styled.i`
    font-size: 50px;
    color: #BDBDBD
  `
  const Barra = styled.hr`
    border: 2px solid #BDBDBD;
  `
  
  return (
    <div>
      <Barra/>
      <NavIcon>
        <Icon>
          <RiUserFill />
        </Icon>
        <Icon >
          <RiSearchFill />
        </Icon>
        <Icon>
          <RiStarFill />
        </Icon>
      </NavIcon>
    </div>
  );
}

export default Footer