import React, { useEffect, useRef } from 'react';
import loginIcon from '@assets/icons/google.webp';
import { userActions } from '@store/Reducers/UserReducer';
import { fetchGoogleEventsAC } from '@store/Sagas/GoogleSaga';
import { gapi, loadAuth2 } from 'gapi-script';

import { useAppDispatch, useAppSelector } from '@/store';

import { ButtonText, GoogleImage, LoginGoogleButtonWrapper } from './styled';

export default function LoginGoogleButton() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const buttonRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const auth2 = await loadAuth2(
        gapi,
        `${process.env.REACT_GOOGLE_CLIENT_ID}`,
        'https://www.googleapis.com/auth/calendar',
      );
      auth2.attachClickHandler(buttonRef.current, {}, (user: any) => {
        dispatch(fetchGoogleEventsAC());
        dispatch(userActions.setUser({ user: user.wt }));
      });
    };
    !user.NT && init();
  }, [user]);
  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      dispatch(userActions.resetUser());
      console.log('User signed out.');
    });
  };
  if (user.hK) {
    return (
      <LoginGoogleButtonWrapper key="2" onClick={user.hK ? signOut : () => {}}>
        <GoogleImage alt="Google logo" src={user.hK} />
        <ButtonText>Logout</ButtonText>
      </LoginGoogleButtonWrapper>
    );
  }
  return (
    <LoginGoogleButtonWrapper
      key="1"
      onClick={user.hK ? signOut : () => {}}
      ref={buttonRef}
    >
      <GoogleImage alt="Google logo" src={loginIcon} />
      <ButtonText>Login</ButtonText>
    </LoginGoogleButtonWrapper>
  );
}
