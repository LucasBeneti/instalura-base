import React from 'react';
import { Box } from '../../../foundation/Layout/Box';

export const CloseButton = ({ onClose }) => (
  <Box
    position="absolute"
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
    <img src="images/closeButton.svg" alt="botão de fechar" />
  </Box>
);
