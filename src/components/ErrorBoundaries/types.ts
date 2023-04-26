import { ErrorInfo, ReactNode } from 'react';

export interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
export interface IErrorBoundaryProps {
  children?: ReactNode;
}
