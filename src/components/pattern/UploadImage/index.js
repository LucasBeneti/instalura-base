import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../commons/Button';
import TextField from '../../form/TextField';
import { Box } from '../../../foundation/Layout/Box';

const UploadImageWrapper = styled.span`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: 45vh;
  .urlInput {
    display: flex;
  }
`;

const UploadImageModal = ({ propsDoModal }) => {
  const [uploadInfo, setUploadInfo] = useState({
    imageUrl: '',
    filter: '',
  });
  const [putImageClicked, setPutImageClicked] = useState(false);
  const [goToFilters, setGoToFilters] = useState(false);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUploadInfo({
      ...uploadInfo,
      [fieldName]: event.target.value,
    });
  }

  function viewImage() {
    setPutImageClicked(!putImageClicked);
  }

  useEffect(() => {
    console.log(`uploadInfo`, uploadInfo);
  }, [uploadInfo]);
  return (
    <UploadImageWrapper>
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px',
        }}
        backgroundColor="white"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        {/* {propsDoModal.CloseButton} */}
        <img
          src={
            uploadInfo.imageUrl && putImageClicked
              ? uploadInfo.imageUrl
              : '/images/defaultImage.jpeg'
          }
          alt="foto do nicolas cage locao"
          style={{ objectFit: 'cover' }}
        />

        {goToFilters ? (
          <>
            <TextField
              placeholder="URL da imagem"
              name="imageUrl"
              value={uploadInfo.imageUrl}
              onChange={handleChange}
              icon="rightArrow"
              putImage={viewImage}
              style={{ borderRadius: '12px 0 0 12px' }}
            />
            <p>Aqui vai o carrousel dos filtros</p>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => setGoToFilters(true)}
            >
              Postar
            </Button>
          </>
        ) : (
          <>
            <TextField
              placeholder="URL da imagem"
              name="imageUrl"
              value={uploadInfo.imageUrl}
              onChange={handleChange}
              icon="rightArrow"
              putImage={viewImage}
              style={{ borderRadius: '12px 0 0 12px' }}
            />
            <p>Formatos suportados: jpeg, png, svg e xpto.</p>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => setGoToFilters(true)}
            >
              Avançar
            </Button>
          </>
        )}
      </Box>
    </UploadImageWrapper>
  );
};

export default UploadImageModal;
