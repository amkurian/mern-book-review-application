import React, { Component } from "react"; 
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class New extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
         newBook: {
             name: "",
             author: "",
             description: "",
             isbn: ""
         }, 
         errors: {}
      }
  }

  change = (key, e) => {
      let r = {...this.state.newBook}
      r[key] = e.target.value
      this.setState({newBook: r})
  }

  newBook = (e) => {
      e.preventDefault();
      axios
        .post(`/api/books`, this.state.newBook)
        .then(res => {
            if(res.data.errors){
                this.setState({errors: res.data.errors.errors})
            } else {
                this.props.history.push("/books")
            }
        })
        .catch(err => console.error(err));
  }

  render() {
    return (
        <Container>
            <Form className="m-3" onSubmit={this.newBook}>
                <h4>Add New Book</h4>
                <hr/>
            <FormGroup>
            <Label>Book Name:</Label>
            <Input type="text" onChange={this.change.bind(this, "name")} placeholder="Enter the name of book" />
            {
                this.state.errors.name ?
                <p>{this.state.errors.name.message}</p>:
                ""
            }
            </FormGroup>
            <FormGroup>
            <Label>Author</Label>
            <Input type="text" onChange={this.change.bind(this, "author")} placeholder="Enter the name of the author" />
            {
                this.state.errors.author ?
                <p>{this.state.errors.author.message}</p>:
                ""
            }
            </FormGroup>
            <FormGroup>
            <Label>Description</Label>
            <Input type="text" onChange={this.change.bind(this, "description")} placeholder="Enter the description" />
            {
                this.state.errors.author ?
                <p>{this.state.errors.author.message}</p>:
                ""
            }
            </FormGroup>
            <FormGroup>
            <Label>ISBN</Label>
            <Input type="text" onChange={this.change.bind(this, "isbn")} placeholder="Enter the isbn" />
            {
                this.state.errors.author ?
                <p>{this.state.errors.author.message}</p>:
                ""
            }
            </FormGroup>
            <Button color="primary" type="submit" className="primary">Register</Button>
        </Form>
      </Container>
    );
  }
}

export default New;