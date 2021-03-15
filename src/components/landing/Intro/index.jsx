import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Olá!</h1>
          <h4>Me chamo Edvan e sou um Desenvolvedor front-end e back-end!</h4>
          <Button as={AnchorLink} href="#contact">
            Entre em contato
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Edvan e sou um Desenvolvedor front-end e back-end" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
