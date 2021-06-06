import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrapper = styled.span`
  cursor: pointer;
`;
const Icon = ({ iconImage }) => (
  <IconWrapper>
    <img src={`/images/${iconImage}`} alt="" />
  </IconWrapper>
);

Icon.propTypes = {
  iconImage: PropTypes.string.isRequired,
};

export default Icon;
