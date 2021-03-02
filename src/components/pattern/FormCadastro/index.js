import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import { Grid } from '../../../foundation/Layout/Grid';
import { Box } from '../../../foundation/Layout/Box';
import { Button } from '../../commons/Button';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import TextField from '../../form/TextField';
import Text from '../../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    nome: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormValid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmitted(true);

        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };
        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((data) => {
            setSubmissionStatus(formStates.DONE);
            console.log(data);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            console.log(error);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text variant="paragraph1" tag="p" color="tertiary.light" marginBottom="32px">
        Você está a um passo de saber tudoo que está rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField placeholder="Nome" name="nome" value={userInfo.nome} onChange={handleChange} />
      </div>
      <div>
        <TextField placeholder="Usuário" name="usuario" value={userInfo.usuario} onChange={handleChange} />
      </div>
      <Button type="submit" variant="primary.main" disabled={isFormValid} fullWidth>
        Cadastrar
      </Button>

      {isFormSubmitted && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="3rem"
            height="3rem"
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="3rem"
            height="3rem"
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col display="flex" paddingRight={{ md: '0' }} flex={1} value={{ xs: 12, md: 5, lg: 4 }}>
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
          {propsDoModal.CloseButton}
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
