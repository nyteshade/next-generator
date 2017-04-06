import React from 'react'

export class View extends React.Component
{
  constructor(props) {
    super(props);
  }

  get styles() {
    return {
      display: 'inline-block',
      border: '1px solid gray',
      padding: '15px',
      minWidth: '320px',
      minHeight: '200px',
      boxSizing: 'border-box'
    };
  }

  render() {
    return (
      <div style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}
