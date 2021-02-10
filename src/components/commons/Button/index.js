import styled, { css } from "styled-components";
import get from "lodash/get";

const ButtonGhost = css`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
  background-color: ${function (props) {
    // get do lodash retorna o valor na path passada ([objeto a ser iterado], [path do valor que deve ser retornado])
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
