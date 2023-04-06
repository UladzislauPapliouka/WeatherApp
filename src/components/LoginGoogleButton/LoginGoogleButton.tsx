import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

import loginIcon from '../../assets/icons/google.png';
import { loginGoogleAC } from '../../store/Sagas/GoogleSaga';
import { useAppDispatch } from '../../store/Store';

import style from './LoginGoogleButton.module.scss';

export default function LoginGoogleButton() {
  const dispatch = useAppDispatch();
  const onClickLoginHandler = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      dispatch(loginGoogleAC(codeResponse));
      return codeResponse;
    },
  });
  const onKeyDownHandler = () => {};
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={onKeyDownHandler}
      onClick={() => onClickLoginHandler()}
      className={style.loginGoogleButton}
    >
      <img alt="Google logo" src={loginIcon} />
      <button type="button">Login</button>
    </div>
  );
}
