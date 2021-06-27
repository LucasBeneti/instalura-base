import React from 'react';
import { Box } from '../../../foundation/Layout/Box';

export const CloseButton = ({ onClose, position }) => (
  <Box
    position={position}
    top={{
      xs: '30px',
      md: '24px',
    }}
    right={{
      xs: '30px',
      md: '24px',
    }}
    cursor="pointer"
    onClick={() => onClose()}
  >
    <img src="/images/closeButton.svg" alt="botão de fechar" />
  </Box>
);
