import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import style from './LoginGoogleButton.module.scss';
import loginIcon from '../../assets/icons/google.png';
import { action } from '../../Store/Store';

export default function LoginGoogleButton() {
  const onClickLoginHandler = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      action('GOOGLE_LOGIN', codeResponse);
      return codeResponse;
    },
  });
  return (
    <div tabIndex={0} role="button" onKeyDown={() => {}} onClick={() => onClickLoginHandler()} className={style.loginGoogleButton}>
      <img alt="Google logo" src={loginIcon} />
      <button type="button" onClick={() => onClickLoginHandler()}>
        Login
      </button>
    </div>
  );
}
