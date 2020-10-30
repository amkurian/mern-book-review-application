import React, { Component } from "react"; 
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
           book: {
             name: "",
             author: "",
             description: "",
             isbn: ""
           }, 
           errors: {}
        }
    }

    componentDidMount = () => {
        axios.get(`/api/books/${this.props.match.params._id}`)
          .then( res => {
            this.setState({book: res.data.book});
          })
          .catch( err => {
            console.log(err);
          });
      }

    change = (key, e) => {
    let r = {...this.state.book};
    r[key] = e.target.value;
    this.setState({book: r});
    }

    updateBook = (e) => {
        e.preventDefault();
        axios.put(`/api/books/${this.state.book._id}`, this.state.book)
          .then( res => {
            if(res.data.errors){
              this.setState({errors: res.data.errors.errors})
            } else {
              this.props.history.push("/books");
            }
          });
      }

  render() {
    return (
        <Container>
            <Form className="m-3" onSubmit={this.updateBook}>
                <h4>Edit New Book</h4>
                <hr/>
            <FormGroup>
            <Label>Book Name:</Label>
            <Input type="text" onChange={this.change.bind(this, "name")} value={this.state.book.name} />
            {
                this.state.errors.name ?
                <p>{this.state.errors.name.message}</p>:
                ""
            }
            </FormGroup>
            <FormGroup>
            <Label>Author</Label>
            <Input type="text" onChange={this.change.bind(this, "author")} value={this.state.book.author} />
            {
                this.state.errors.author ?
                <p>{this.state.errors.author.message}</p>:
                ""
            }
            </FormGroup>
            <FormGroup>
            <Label>Description</Label>
            <Input type="text" onChange={this.change.bind(this, "description")} value={this.state.book.description} />
            {
                this.state.errors.author ?
                <p>{this.state.errors.author.message}</p>:
                ""
            }
            </FormGroup>
             <FormGroup>
            <Label>ISBN</Label>
            <Input type="text" onChange={this.change.bind(this, "isbn")} value={this.state.book.isbn} />
            {
                this.state.errors.author ?
                <p>{this.state.errors.author.message}</p>:
                ""
            }
            </FormGroup>
            <Button color="primary" type="submit" className="primary">Update</Button>
        </Form>
      </Container>
    );
  }
}

export default Edit
