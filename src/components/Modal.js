import React, { Component } from 'react'
import axios from 'axios';

export class Modal extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            year: '',
            price: 0
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'title') {
            this.setState({
                title: value
            });
        }
        else if (name === 'author') {
            this.setState({
                author: value
            });
        }
        else if (name === 'year') {
            this.setState({
                year: value
            });
        }
        else {
            this.setState({
                price: value
            });
        }
    }

    handleSave() {
        const book = {
            title: this.state.title,
            author: this.state.author,
            year: this.state.year,
            price: this.state.price
        };

        axios.post('/books', book)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        window.location.reload(true);
    }

    render() {
        return (
          <div>
            <div className='bg-warning container d-flex justify-content-center'>  
                <button type="button" className="btn btn-success text-light" data-toggle="modal" data-target="#bookModal">
                    <b>Add a New Book</b>
                </button>
            </div>
            <div className="modal fade" id="bookModal" tabindex="-1" role="dialog" aria-labelledby="bookModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="bookModalLabel">Add A New Book</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='form-group'>
                                    <label className='col-form-label'> Book Title
                                        <input className='form-control' onChange={this.handleChange} name='title' type='text' required></input>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <label className='col-form-label'> Book Author
                                        <input className='form-control' onChange={this.handleChange} name='author' type='text' required></input>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <label className='col-form-label'> Year of Publication
                                        <input className='form-control' onChange={this.handleChange} name='year' type='text' required></input>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <label className='col-form-label'> Book Price
                                        <input className='form-control' onChange={this.handleChange} name='price' type='number' required></input>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSave}>Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      )
    }
}

export default Modal
