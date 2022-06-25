import styled from "@emotion/styled";
import { FaUsers } from "react-icons/fa";
import { RiUserHeartFill, RiGitRepositoryFill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { colors } from "../../styles";

const Icons = {
  followers: <FaUsers color="#2D9CDB" />,
  following: <RiUserHeartFill color="#F2994A" />,
  repos: <RiGitRepositoryFill color="#219653" />,
  gist: <FaFileCode color="#828282" />
}

const StyledCard = styled.div`
  background-color: #FFFFFF;
  width: 140px;
  height: 140px;
  border-radius: 4px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.i`
  font-size: 50px;
`

function Card({name, number, icon, onClickCard}) {
  return (
      <StyledCard onClick={onClickCard}>
        <Icon >
          { Icons[icon] }
          {/* { number } */}
          {/* { name } */}
        </Icon>
        <p>{number}</p>
        <p>{name}</p>
      </StyledCard>
  )}

export default Card