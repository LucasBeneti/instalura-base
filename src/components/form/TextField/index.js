import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundation/Text';
import { Button } from '../../commons/Button';

const InputWrapper = styled.div`
  margin-bottom: 17px;
  display: flex;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme, isFieldInvalid }) =>
    isFieldInvalid &&
    css`
      border-color: ${theme.colors.error.main.color};
      & + span {
        color: ${theme.colors.error.main.color};
        font-size: 11px;
      }
    `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  isTouched,
  error,
  icon,
  putImage,
  ...props
}) {
  const isFieldInvalid = !!error && isTouched;
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />
      {isFieldInvalid && (
        <Text variant="smallestException" color="error.main" role="alert">
          {error}
        </Text>
      )}

      {icon && (
        <Button
          variant="secondary.main"
          style={{ borderRadius: '0 12px 12px 0' }}
          onClick={putImage}
        >
          {icon === 'rightArrow' && <RightArrow />}
        </Button>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isTouched: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
};

const RightArrow = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
