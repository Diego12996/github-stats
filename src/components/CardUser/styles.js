import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";
import { BsStarFill } from "react-icons/bs";

export const Container = styled.div`
  margin: 1rem;
  width: 300px;
  height: 56px;
  background-color: white;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  gap: 10px;
  font-family: ${fonts.primary};
  align-items: center;
  justify-content: space-between;
  transition: .2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Name = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: ${colors.gray[900]};
`;

export const Username = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${colors.gray[800]};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Star = styled(BsStarFill)`
  margin: 0 0.5rem;
  font-size: 22px;
  cursor: pointer;
  color: rgba(242, 201, 76, 1);
`;