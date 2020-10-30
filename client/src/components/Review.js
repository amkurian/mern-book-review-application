import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { Button, Container, Table } from 'reactstrap';


export class Review extends Component {

    constructor(props){
        super(props);
        this.state = {
            book: {reviews:[]}
        }
    }

    componentDidMount = () => {
        // console.log(this.props.match.params._id)
        axios
          .get(`/api/books/${this.props.match.params._id}`)
          .then(res => {
              this.setState({book: res.data.book})
          })
          .catch(err => console.error(err));
    }

    render() {
        return (
            <Container className="m-3">
                <h4 className="float-right">Reviews for {this.state.book.name}</h4>
                <Button outline color="primary" className="mr-3">
                    <Link to={`/books/${this.props.match.params._id}/review`}>New Review</Link>
                </Button>
                <Table dark className="mt-3">
                    <thead>
                        <th>Customer Name:</th>
                        <th>Stars:</th>
                        <th>Description:</th>
                    </thead>
                    <tbody>
                    {this.state.book.reviews.map( review =>  {
                    return (
                        <tr key={review._id} className="review">
                            <td>{review.customerName}</td>
                            <td>{review.rating}</td>
                            <td>{review.reviewDescription}</td>
                        </tr>
                        )
                    })}
                    </tbody>
                </Table>  
            </Container>
        )
    }
}

export default Review
