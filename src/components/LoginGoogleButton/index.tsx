import React, { useEffect, useRef } from 'react';
import loginIcon from '@assets/icons/google.webp';
import { userActions } from '@store/reducers/userReducer';
import { fetchGoogleEvents } from '@store/sagas/googleEventsWatcher';
import { IGoogleUserEntity } from '@typing/apiTypes/googleCalendarAPITypes';
import { gapi, loadAuth2 } from 'gapi-script';

import { useAppDispatch, useAppSelector } from '@/store';

import { ButtonText, GoogleImage, LoginGoogleButtonWrapper } from './styled';

export default function LoginGoogleButton() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userReducer);

  const buttonRef = useRef(null);

  useEffect(() => {
    const initializeGoogleLogin = async () => {
      const auth2 = await loadAuth2(
        gapi,
        `${process.env.REACT_GOOGLE_CLIENT_ID}`,
        'https://www.googleapis.com/auth/calendar',
      );

      auth2.attachClickHandler(
        buttonRef.current,
        {},
        (user: IGoogleUserEntity) => {
          dispatch(fetchGoogleEvents());
          dispatch(userActions.setUser({ user: user.wt }));
        },
      );
    };

    initializeGoogleLogin();
  }, [buttonRef, user, dispatch]);
  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(() => {
      dispatch(userActions.resetUser());
    });
  };

  return user.hK ? (
    <LoginGoogleButtonWrapper key="logoutButton" onClick={signOut}>
      <GoogleImage alt="Google logo" src={user.hK} />
      <ButtonText>Logout</ButtonText>
    </LoginGoogleButtonWrapper>
  ) : (
    <LoginGoogleButtonWrapper key="loginButton" ref={buttonRef}>
      <GoogleImage alt="Google logo" src={loginIcon} />
      <ButtonText>Login</ButtonText>
    </LoginGoogleButtonWrapper>
  );
}
