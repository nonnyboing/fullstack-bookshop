import React, { Component } from 'react';
import axios from 'axios';
import {Card} from './Card';

export default class Books extends Component {

    constructor(){
        super();
        this.state = {
            books: []
        }; 
    }

    componentDidMount() {
        axios.get('/books')
            .then(res => this.setState({books: res.data}))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className='container border' style={{backgroundColor: "#fceed1"}}>
                <div className='row border'>
                    {this.state.books.map(book => <Card key={book._id} mybook={book} />)}
                </div>
            </div>
        )
    }
}
