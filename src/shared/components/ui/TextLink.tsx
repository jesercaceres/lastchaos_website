import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TextLink = styled(Link)`
  display: block;
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.lightGold};
  }
`;