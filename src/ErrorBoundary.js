import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      message: ''
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    console.log('error boundary', error);
    return { 
      hasError: true,
      message: error && error.message
    };
  }

  componentDidCatch(error, errorInfo) {
    // log error
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.message}</h1>
    }
    return this.props.children;
  }

}
