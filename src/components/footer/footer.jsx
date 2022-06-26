import styled from '@emotion/styled'
import { RiSearchFill, RiUserFill, RiStarFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

function NavIcon({ to, icon }) {
  const Icon = styled(NavLink)`
    font-size: 50px;
    color: #BDBDBD
  `
  return (
    <Icon to={to} style={({isActive}) => {
      if(!isActive) return;
      return {
        color: "#828282"
      }
    }}>
      {icon}
    </Icon>
  )
}

function Footer() {

  const IconContainer = styled.div`
    backgorund-color: #F2F2F2;
    display: flex;
    justify-content: space-evenly;
  `
  const Bar = styled.hr`
    border: 2px solid #BDBDBD;
  `
  
  return (
    <div>
      <Bar/>
      <IconContainer>
        <NavIcon to="/profile" icon={<RiUserFill />} />
        <NavIcon to="/search" icon={<RiSearchFill />} />
        <NavIcon to="/favorites" icon={<RiStarFill />} />
      </IconContainer>
    </div>
  );
}

export default Footer