import React from 'react';
import styled from 'styled-components';

const PostIconWrapper = styled.span`
  cursor: pointer;
`;

export const PostIcon = ({ onClick }) => (
  <PostIconWrapper onClick={() => onClick()}>
    <img src="/images/postIcon.svg" alt="adicionar postagem" />
  </PostIconWrapper>
);
