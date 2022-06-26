import styled from '@emotion/styled'
import { RiSearchFill, RiUserFill, RiStarFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import { useAuth } from '../../context/auth-context';


function NavIcon({ to, icon }) {
  const Icon = styled(NavLink)`
    font-size: 50px;
    color: #BDBDBD;
    transition: .3s ease-in;
    &:hover {
      color: #828282;
    }
  `;

  return (
    <Icon to={to} style={({ isActive }) => {
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
  const { logout } = useAuth();


  const Logout = styled(BiLogOut)`
    font-size: 50px;
    color: #BDBDBD;
    transition: .3s ease-in;
    cursor: pointer;
    &:hover {
      color: #828282;
    }
  `;

  const IconContainer = styled.div`
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
        <Logout onClick={logout}/>
      </IconContainer>
    </div>
  );
}

export default Footer