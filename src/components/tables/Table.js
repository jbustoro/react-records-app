import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Artist</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.recordsList.length > 0 &&
            this.props.recordsList.map((record, index) => (
              <tr key={index}>
                <td>
                  <img src={record.cover} />
                </td>
                <td>{record.artist}</td>
                <td>{record.title}</td>
                <td>
                  <button
                    className="btn bg-secondary"
                    title="Edit"
                    onClick={e => this.props.handleEditModal(index)}
                  >
                    <i className="fa fa-edit" />
                  </button>
                  <button
                    className="btn bg-light"
                    title="Delete"
                    onClick={e => this.props.handleDelete(index)}
                  >
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
