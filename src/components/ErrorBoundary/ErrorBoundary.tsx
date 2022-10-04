import { Component, ReactNode, ReactElement } from 'react';

interface StateProps {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode | ReactElement;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, StateProps> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="centered-row">
          <p>
            Desculpe, mas algo saiu fora do esperado. Atualize a página para
            corrigir!
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
