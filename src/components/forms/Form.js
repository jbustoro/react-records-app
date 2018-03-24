import React, { Component } from 'react';
import Input from '../inputs/Input';

class Form extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <Input
          className="form-control"
          name="artist"
          placeholder="Artist"
          value={this.props.artist}
          onChange={this.props.onChange}
        />
        <br />
        <Input
          className="form-control"
          name="title"
          placeholder="Title"
          value={this.props.title}
          onChange={this.props.onChange}
        />
        <br />
        <Input
          className="form-control"
          name="cover"
          placeholder="Cover URL"
          value={this.props.cover}
          onChange={this.props.onChange}
        />
        <br />
        <Input
          className="btn btn-dark"
          type="submit"
          value={this.props.submitText}
        />
      </form>
    );
  }
}

export default Form;
