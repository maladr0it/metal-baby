import styled, { css } from 'styled-components';

const activeStyle = css`
  cursor: pointer;

  &:hover {
    filter: brightness(1.04);
  }

  &:active {
    filter: brightness(1.08);
  }
`;

const disabledStyle = css`
  cursor: default;
  color: ${({ theme }) => theme.disabled};
`;

const Button = styled.button`
  outline: none;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;

  background-image: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.primary}, ${theme.secondary})`};
  color: ${({ theme }) => theme.background};

  letter-spacing: 0.2rem;
  text-transform: uppercase;

  ${({ disabled }) => (disabled ? disabledStyle : activeStyle)}
`;

export default Button;
