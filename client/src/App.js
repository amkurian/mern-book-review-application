import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap';
import List from './components/List'
import New from './components/New'
import Review from './components/Review'
import Edit from './components/Edit'
import ReviewForm from './components/ReviewForm'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Container className="mt-3">
          <h1 className="mb-3">GreatReads!</h1>
          <Button outline color="primary" className="mr-3">
            <Link to="/">Home</Link>
          </Button>
          <Button outline color="primary">
            <Link to="/new">Add New Book</Link>
          </Button>
          <Route exact path="/" component={List}/>
          <Route exact path="/new" component={New}/>
          <Route exact path="/books/:_id" component={Review}/>
          <Route exact path="/books/:_id/edit" component={Edit}/>
          <Route exact path="/books/:_id/review" component={ReviewForm}/>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
