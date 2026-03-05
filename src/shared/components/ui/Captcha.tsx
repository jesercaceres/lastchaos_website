// src/shared/components/ui/Captcha.tsx
import React, { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { CaptchaProps } from '../../../types';

const CaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* Removido o margin-bottom para não conflitar com o gap do Form */
  
  /* Remove o fundo branco que aparece brevemente enquanto carrega */
  & > div > div {
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow: hidden;
  }
`;

export const Captcha = forwardRef<ReCAPTCHA, CaptchaProps>(
  ({ onChange, siteKey, theme = 'dark', size = 'compact' }: CaptchaProps, ref) => {
    return (
      <CaptchaContainer>
        <ReCAPTCHA
          ref={ref}
          sitekey={siteKey}
          onChange={onChange}
          theme={theme}
          size={size}
        />
      </CaptchaContainer>
    );
  }
);

Captcha.displayName = 'Captcha';