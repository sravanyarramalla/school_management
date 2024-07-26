import { useMoveBack } from "../features/hooks/useMoveBack";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  margin-top: -3rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  cursor: pointer;
`;

function Logo() {
  const moveBack = useMoveBack();

  return (
    <StyledLogo>
      <Img onClick={moveBack} src="/schoolLogo.png" alt="School Logo" />
    </StyledLogo>
  );
}

export default Logo;
