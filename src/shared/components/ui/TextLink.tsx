import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TextLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.lightGold};
  }
`;