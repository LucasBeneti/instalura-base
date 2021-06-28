import React, { useState } from 'react';
import { Logo } from '../../../theme/Logo';
import TextField from '../../form/TextField';
import Icon from '../Icon';
// import { MenuProfileWrapper } from './styles/MenuProfileWrapper';

import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const MenuProfileWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  position: fixed;
  bottom: 0;
  width: 100%;
  width: -webkit-fill-available;

  display: flex;
  justify-content: space-between;
  padding: 12px 26px;

  background-color: ${({ theme }) => theme.colors.background.light.color};
  /* box-shadow: 0px -10px 16px rgba(0, 0, 0, 0.04); */
  border-radius: 1.5rem 1.5rem 0 0;
  border-top-color: ${({ theme }) => theme.colors.borders.main.color};
  border-top-style: solid;
  border-top-width: 1px;
  /* z-index: 99; */

  ${breakpointsMedia({
    md: css`
      position: relative;
      width: auto;
      display: flex;
      justify-content: flex-end;
      column-gap: 2rem;
      padding: 0;
      box-shadow: none;
      border: none;
    `,
  })}
`;

MenuProfileWrapper.Logo = styled.span`
  position: absolute;
  display: fixed;
  top: 0;
`;
// fazer mais focado com mobile first, pra não ter muito problema depois
// dá pra fazer um styled componente que vai servir como aba ou algo assim,
// e quando mudar o tamanho da tela pra maior que md, muda as ordens das paradas

const Block = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  height: 4rem;
  width: 4rem;

  ${propToStyle('order')}
  ${propToStyle('position')}
`;

// MenuProfileWrapper.LeftSide = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   padding: 0;
//   margin: 0;
//   width: 33%;
// `;
// MenuProfileWrapper.CentralSide = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 33%;
// `;
// MenuProfileWrapper.RightSide = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   gap: 1rem;
//   align-items: center;
//   width: 33%;
// `;

const MenuProfile = ({ onAddClick }) => {
  const [search, setSearch] = useState('');
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <MenuProfileWrapper>
      <Block order={{ md: 3 }}>
        <Icon
          iconImage="homeIcon.svg"
          onClick={() => {
            console.log('ir para home');
          }}
        />
      </Block>
      <Block order={{ md: 1 }}>
        <Icon
          iconImage="searchIcon.svg"
          onClick={() => {
            console.log('buscar');
          }}
        />
      </Block>
      <Block order={{ md: 2 }}>
        <Icon iconImage="postIcon.svg" onClick={onAddClick} />
      </Block>
      <Block order={{ md: 4 }}>
        <Icon
          iconImage="heartIcon.svg"
          onClick={() => {
            console.log('coração');
          }}
        />
      </Block>
      <Block order={{ md: 5 }}>
        <Icon
          iconImage="heartIcon.svg"
          onClick={() => {
            console.log('perfil');
          }}
        />
      </Block>
    </MenuProfileWrapper>
  );
};

export default MenuProfile;
