import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../../../foundation/Layout/Box';
import { postService } from '../../../services/post/postService';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Button } from '../../commons/Button';
import TextField from '../../form/TextField';

const UploadImageWrapper = styled.span`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 20%;
  .urlInput {
    display: flex;
  }
`;

const UploadImageModal = ({ propsDoModal }) => {
  const [uploadInfo, setUploadInfo] = useState({
    photoUrl: '',
    filter: 'original',
    description: 'um dog qualquer',
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

  const handleAddPost = async () => {
    if (uploadInfo.photoUrl) {
      console.log(`fazendo upload da imagem${uploadInfo.photoUrl}`);
      const response = await postService().addPost({
        photoUrl: uploadInfo.photoUrl,
        filter: uploadInfo.filter,
        description: uploadInfo.description,
      });
      return response;
    }
  };

  return (
    <UploadImageWrapper>
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '1rem',
          md: '3rem',
        }}
        backgroundColor="white"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        {/* {propsDoModal.CloseButton} */}
        <img
          src={
            uploadInfo.photoUrl && putImageClicked
              ? uploadInfo.photoUrl
              : '/images/defaultImage.jpeg'
          }
          alt="foto do nicolas cage locao"
          style={{ objectFit: 'cover' }}
        />

        {goToFilters ? (
          <>
            <p>Descrição</p>
            <p>Aqui vai o carrousel dos filtros</p>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={handleAddPost}
            >
              Postar
            </Button>
          </>
        ) : (
          <>
            <TextField
              placeholder="URL da imagem"
              name="photoUrl"
              value={uploadInfo.photoUrl}
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

/*
  Para mostrar o filtro em cima da imagem, tem que ter o figure em volta de uma tag image.
  O componente de carrossel receberia e setaria um estado nesse componente aqui
  que mostraria o filtro da imagem de preview.
*/
