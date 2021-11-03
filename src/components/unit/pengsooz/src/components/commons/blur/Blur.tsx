import styled from "@emotion/styled";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

const Blur = () => {
  return <Background></Background>;
};

export default Blur;
