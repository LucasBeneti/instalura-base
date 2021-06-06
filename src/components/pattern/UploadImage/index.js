import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../commons/Button';
import TextField from '../../form/TextField';

const UploadImageWrapper = styled.span`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: 45vh;
`;

const UploadImageModal = () => {
  const [uploadInfo, setUploadInfo] = useState({
    uploadUrl: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUploadInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }
  return (
    <UploadImageWrapper>
      <img src="/images/nicolas.jpeg" alt="foto do nicolas cage locao" />
      <TextField
        placeholder="URL da imagem"
        name="imageUrl"
        value={uploadInfo.uploadUrl}
        onChange={handleChange}
      />
      <p>Formatos suportados: jpeg, png, svg e xpto.</p>
      <Button
        variant="primary.main"
        margin={{
          xs: 'auto',
          md: 'initial',
        }}
        display="block"
        onClick={() => {
          console.log('Avançar clicado');
        }}
      >
        Avançar
      </Button>
    </UploadImageWrapper>
  );
};

export default UploadImageModal;
