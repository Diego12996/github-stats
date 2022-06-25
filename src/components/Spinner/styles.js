import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const wobbleAnimate = keyframes`
  0%,
  100% {
  transform: translateX(-90%);
  }

  50% {
  transform: translateX(90%);
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Wobble = styled.div`
  display: flex;
  align-items: center;
  jusitify-content: center;
  height: 5px;
  width: 80px;
  border-radius: calc(5px / 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &::before {
    content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.1;
  }
  &::after {
    content: '';
  height: 100%;
  width: 100%;
  border-radius: calc(5px / 2);
  animation: ${wobbleAnimate} 1.2s ease-in-out infinite;
  transform: translateX(-90%);
  background-color: black;
  }
`;