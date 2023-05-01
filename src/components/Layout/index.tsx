import React, { PropsWithChildren } from 'react';

import { bg1, bg2 } from '@assets/backgrounds';
import {
  AppBackground,
  AppWrapper,
  Container,
} from '@components/Layout/styled';
import { ILayoutProps } from '@components/Layout/types';

const Layout = ({ backgrounds, children }: PropsWithChildren<ILayoutProps>) => (
  <AppWrapper
    style={{ backgroundImage: `url(${backgrounds ? backgrounds[1] : bg2})` }}
  >
    <AppBackground>
      <Container
        style={{
          backgroundImage: `url(${backgrounds ? backgrounds[0] : bg1})`,
        }}
      >
        {children}
      </Container>
    </AppBackground>
  </AppWrapper>
);

export default Layout;
