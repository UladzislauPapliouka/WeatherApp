import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import style from './LoginGoogleButton.module.scss';
import loginIcon from '../../assets/icons/google.png';
import { useAppDispatch } from '../../Store/Store';
import { loginGoogleAC } from '../../Store/Sagas/GoogleSaga';

export default function LoginGoogleButton() {
  const dispatch = useAppDispatch();
  const onClickLoginHandler = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      dispatch(loginGoogleAC(codeResponse));
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
