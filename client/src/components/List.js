import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Table, Button } from 'reactstrap';

export class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount = () => {
        axios
          .get(`/api/books`)
          .then(res => {
            // console.log(res)
            this.setState({books: res.data.books});
          })
          .catch(err => console.error(err));
    }

    delete = (_id) => {
      // console.log(_id)
      axios
        .delete(`/api/books/${_id}`)
        .then(res => {
          console.log(res)
          this.componentDidMount();
        })
        .catch(err => console.error(err));
    }

    render() {
      return (
        <Container>
        <>
        <Table className="mt-3">
            <thead>
                <th>Name</th>
                <th>Author</th>
                <th>Description</th>
                <th>ISBN</th>
            </thead>
            <tbody>
            {this.state.books.map((book) => {
              return (
                <tr key={book._id} className="book">
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.description}</td>
                    <td>{book.isbn}</td>
                    <td>
                    <Button outline color="secondary" className="m-1">
                      <Link to={`/books/${book._id}`}>Review</Link>
                    </Button>
                    <Button outline color="secondary" className="m-1">
                      <Link to={`/books/${book._id}/edit`}>Update</Link>
                    </Button>
                    <Button outline color="secondary" className="m-1">
                      <Link onClick={this.delete.bind(this,book._id)}>Delete</Link>
                    </Button>
                    </td>
                </tr>
                )
            })}
          </tbody>
          </Table>
        </>
        </Container>
      )
    }
  }

export default List
