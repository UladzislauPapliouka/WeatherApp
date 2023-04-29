import React, { Component, ErrorInfo } from 'react';

import { ErrorComponentStack, ErrorMessage, ErrorWrapper } from './styled';
import { IErrorBoundaryProps, IErrorBoundaryState } from './types';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { state, props } = this;
    return state.hasError ? (
      <ErrorWrapper>
        <ErrorMessage>{state.error?.message}</ErrorMessage>
        <ErrorComponentStack>
          {state.errorInfo?.componentStack}
        </ErrorComponentStack>
      </ErrorWrapper>
    ) : (
      props.children
    );
  }
}
export default ErrorBoundary;
