import styled from "styled-components";
import { colours } from "./theme";

export default styled.button`
  background-color: ${colours.quinary};
  border-radius: 5px;
  color: ${({ disabled }) => (disabled ? "gray" : colours.secondary)};
  padding: 0.2rem 1rem;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  border: ${({ isSmall }) => (isSmall ? 2 : 4)}px solid;
  font-size: ${({ isSmall }) => (isSmall ? 1 : 2)}rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
