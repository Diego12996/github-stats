import styled from "@emotion/styled";
import { FaUsers } from "react-icons/fa";
import { RiUserHeartFill, RiGitRepositoryFill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";

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
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const Icon = styled.i`
  font-size: 50px;
`

const Number = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`

const Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`

function Card({name, number, icon, onClickCard}) {
  return (
      <StyledCard onClick={onClickCard}>
        <Icon >
          { Icons[icon] }
 
        </Icon>
        <Number>{number}</Number>
        <Name>{name}</Name>
      </StyledCard>
  )}

export default Card