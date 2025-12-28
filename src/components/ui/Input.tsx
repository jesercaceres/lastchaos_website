import styled from 'styled-components'
import { InputProps } from '../../types'

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightGold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.dark};
  border: 2px solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : theme.colors.gray)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.normal};

  &:focus {
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error : theme.colors.gold)};
    box-shadow: ${({ theme, hasError }) =>
      hasError
        ? `0 0 0 3px rgba(244, 67, 54, 0.1)`
        : `0 0 0 3px rgba(212, 175, 55, 0.1)`};
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`

const ErrorMessage = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  disabled,
}) => {
  return (
    <InputWrapper>
      {label && (
        <Label>
          {label}
          {required && <span style={{ color: '#F44336', marginLeft: '4px' }}>*</span>}
        </Label>
      )}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
        required={required}
        disabled={disabled}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
}
