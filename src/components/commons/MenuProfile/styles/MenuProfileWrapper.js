import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../../foundation/Text';

export const MenuProfileWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

MenuProfileWrapper.LeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 33%;
`;
MenuProfileWrapper.CentralSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;
MenuProfileWrapper.RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  width: 33%;
`;
