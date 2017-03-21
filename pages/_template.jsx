import React from 'react';

import '../styles/main.css';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="wrapper">
        {children}
      </div>
    );
  }
}

export default Template;
