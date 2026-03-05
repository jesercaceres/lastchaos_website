// src/shared/components/ui/Captcha.tsx
import React, { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { CaptchaProps } from '../../../types';

const CaptchaContainer = styled.div`
  display: flex;
  /* Removido o justify-content: center e width: 100% para permitir alinhamento flexível */
  
  & > div > div {
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow: hidden;
  }
`;

export const Captcha = forwardRef<ReCAPTCHA, CaptchaProps>(
  ({ onChange, siteKey, theme = 'dark', size = 'normal' }, ref) => {
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