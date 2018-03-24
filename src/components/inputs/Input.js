import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          className={this.props.className}
          type={this.props.type || 'text'}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={e => this.props.onChange(e)}
        />
      </div>
    );
  }
}

export default Input;
