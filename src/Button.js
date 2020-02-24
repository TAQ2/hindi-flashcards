import styled from "styled-components";
import { colours } from "./theme";

export default styled.button`
  padding: 0.2rem 1rem;
  border-radius: 5px;
  background-color: ${colours.quinary};
  color: ${({ disabled }) => (disabled ? "gray" : colours.secondary)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  border: ${({ isSmall }) => (isSmall ? 2 : 4)}px solid;
  font-size: ${({ isSmall }) => (isSmall ? 1 : 2)}rem;
`;
