import React, { useState } from 'react';
import { Logo } from '../../../theme/Logo';
import TextField from '../../form/TextField';
import Icon from '../Icon';
import { MenuProfileWrapper } from './styles/MenuProfileWrapper';

const MenuProfile = ({ onAddClick }) => {
  const [search, setSearch] = useState('');
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <MenuProfileWrapper>
      <MenuProfileWrapper.LeftSide>
        <Logo />
      </MenuProfileWrapper.LeftSide>
      <MenuProfileWrapper.CentralSide>
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField placeholder="Pesquisar" name="search" value={search} onChange={handleChange} />
        </span>
      </MenuProfileWrapper.CentralSide>
      <MenuProfileWrapper.RightSide>
        <Icon iconImage="postIcon.svg" onClick={onAddClick} />
        <Icon
          iconImage="homeIcon.svg"
          onClick={() => {
            console.log('ir para home');
          }}
        />
        <Icon
          iconImage="heartIcon.svg"
          onClick={() => {
            console.log('coração');
          }}
        />
        <Icon
          iconImage="heartIcon.svg"
          onClick={() => {
            console.log('perfil');
          }}
        />
      </MenuProfileWrapper.RightSide>
    </MenuProfileWrapper>
  );
};

export default MenuProfile;
