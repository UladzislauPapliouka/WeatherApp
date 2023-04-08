import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

import loginIcon from '../../assets/icons/google.png';
import { loginGoogleAC } from '../../store/Sagas/GoogleSaga';
import { useAppDispatch } from '../../store/Store';

import { ButtonText, GoogleImage, LoginGoogleButtonWrapper } from './styled';

export default function LoginGoogleButton() {
  const dispatch = useAppDispatch();
  const onClickLoginHandler = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dispatch(loginGoogleAC(codeResponse));
      return codeResponse;
    },
  });
  return (
    <LoginGoogleButtonWrapper onClick={() => onClickLoginHandler()}>
      <GoogleImage alt="Google logo" src={loginIcon} />
      <ButtonText>Login</ButtonText>
    </LoginGoogleButtonWrapper>
  );
}
