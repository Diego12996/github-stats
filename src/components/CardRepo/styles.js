import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

export const Container = styled.div`
  width: 300px;
  height: 89px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
  margin: 1rem;
  transition: .2s ease-in;
  padding: 8px 12px;
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primary};
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Name = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.cyan[500]};
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.gray[700]};
`;

export const Extra = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  gap: 1rem;
`;

export const Language = styled(BsFillCircleFill)`
  font-size: 12px;
  color: ${({color}) => color};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Star = styled(AiOutlineStar)`
  font-size: 12px;
`;

export const Fork = styled(BiGitRepoForked)`
  font-size: 12px;
`;
