import React from "react";
import styled from "styled-components";

import { MenuWrapper } from "../../../styles/MenuWrapper";
import { Button } from "../../../components/commons/Button";
import { Logo } from "../../../theme/Logo";
import Text from "../../../foundation/Text";

export default function Menu() {
  const links = [
    {
      texto: "Home",
      url: "/",
    },
    {
      texto: "perguntas frequentes",
      url: "/faq",
    },
    {
      texto: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text tag="a" variant="smallestException" href={link.url}>
                {link.texto}
              </Text>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
