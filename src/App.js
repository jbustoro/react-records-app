import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';
import Form from './components/forms/Form';
import Table from './components/tables/Table';
import Modal from './components/modals/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      title: '',
      cover: '',
      recordsList: [],
      showEditModal: false,
      editingRecordIndex: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e, isEdit = false) {
    e.preventDefault();
    if (!isEdit) {
      !this.state.artist || !this.state.title || !this.state.cover
        ? swal({
            text: 'Empty data!',
            icon: 'warning',
            dangerMode: true
          })
        : this.setState(oldState => {
            return {
              artist: '',
              title: '',
              cover: '',
              recordsList: oldState.recordsList.concat([
                {
                  artist: oldState.artist,
                  title: oldState.title,
                  cover: oldState.cover
                }
              ])
            };
          });
    } else {
      const filteredRecords = this.state.recordsList.filter(
        (record, i) => i !== this.state.editingRecordIndex
      );
      this.setState({
        ...this.state,
        recordsList: filteredRecords
      });

      this.setState(oldState => {
        return {
          artist: '',
          title: '',
          cover: '',
          recordsList: oldState.recordsList.concat([
            {
              artist: oldState.artist,
              title: oldState.title,
              cover: oldState.cover
            }
          ]),
          showEditModal: !this.state.showEditModal
        };
      });
      // TODO fix bug, it replaces the edited record for all the recordsList. Fix the onChange bug
      console.log('submit index' + this.state.editingRecordIndex);
    }
  }

  handleEditModal = index => {
    const editingRecord = this.state.recordsList[index];
    this.setState(prevState => ({
      ...prevState,
      ...editingRecord,
      showEditModal: !this.state.showEditModal,
      editingRecordIndex: index
    }));
    console.log('index in modal' + index);
  };

  handleDelete(index) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        const filteredRecords = this.state.recordsList.filter(
          (record, i) => i !== index
        );
        this.setState({
          ...this.state,
          recordsList: filteredRecords
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="Title">
            <h1>Records App 0.2</h1>
          </div>
          <div className="Logo">
            <img className="App-logo" src="app-logo.png" />
          </div>
          <div className="Form">
            <Form
              artist={this.state.artist}
              title={this.state.title}
              cover={this.state.cover}
              submitText={'+ Add'}
              initial={true}
              onChange={e => this.handleChange(e)}
              onSubmit={e => this.handleSubmit(e)}
            />
          </div>
        </div>
        <div className="Table">
          {this.state.recordsList.length > 0 && (
            <Table
              recordsList={this.state.recordsList}
              handleDelete={e => this.handleDelete(e)}
              handleEditModal={e => this.handleEditModal(e)}
            />
          )}
        </div>
        <div className="Modal">
          <Modal
            onClose={this.handleEditModal}
            showEditModal={this.state.showEditModal}
          >
            <h4>Edit record</h4>
            <Form
              artist={this.state.artist}
              title={this.state.title}
              cover={this.state.cover}
              submitText={'Save'}
              onChange={e => this.handleChange(e)}
              onSubmit={e => this.handleSubmit(e, true)}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
