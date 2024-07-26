import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      text-align: right;
      font-size: 1.5rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    line-height: 20px;
`;

export default Heading;
