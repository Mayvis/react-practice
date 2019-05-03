import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch = (error, errorInfo) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>; // if has error return h1 tag
    } else {
      return this.props.children; // if not has error return inside ErrorBoundary tag's content
    }
  }
}

export default ErrorBoundary;
