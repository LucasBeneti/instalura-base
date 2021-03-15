import React, { useContext } from 'react';
import { Button } from '../src/components/commons/Button';
import Text from '../src/foundation/Text';
import { Grid } from '../src/foundation/Layout/Grid';
import { Box } from '../src/foundation/Layout/Box';
import { WebsitePageContext } from '../src/components/wrappers/WebSitePage';
import websitePageHOC from '../src/components/wrappers/WebSitePage/hoc';

function HomeScreen() {
  const websitePageContext = useContext(WebsitePageContext);
  return (
    <Box
      flex="1"
      display="flex"
      // flexWrap="wrap"
      flexDirection="column"
      // justifyContent="space-between"
      // backgroundImage="url(/images/bubbles.svg)"
      // backgroundRepeat="no-repeat"
      // backgroundPosition="bottom right"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 5 }} offset={{ xs: 0, md: 1 }} display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column">
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              // textAlign="left"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting induse 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => websitePageContext.toggleModalCadastro()}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
          >
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Nicolas Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
