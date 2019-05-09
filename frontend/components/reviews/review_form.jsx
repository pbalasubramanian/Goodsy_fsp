import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
// import Rating from '../rating/rating';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(e);
        this.props.action(this.state);
    }

    update(field) {
        return (e) => {
            if (field === "rating") {
                this.setState({ [field]: e });
            } else {
                this.setState({ [field]: e.target.value });
            }
        };
    }

    // update(field) { this works don't delete 
    //     return e => {this.setState({
    //         [field]: e.target.value
    //     });
    // }

    componentWillUnmount() {
        this.state.description = "";
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => {
                    return <li key={`error-${i}`}> {error}</li>
                })}
            </ul>
        )
    }


    render() {
        const product = this.props.product;
        if (!product) {
            return (
                <h1>Loading...</h1>
            );
        }

        if (this.props.user) {
            return (
                <div className="review-form">
                    <form action="" id="create-review" onSubmit={this.handleSubmit}>
                        <div id="review-form-header">
                            <h3>Leave a review</h3>
                        </div>
                        <Rating
                            className="product-rating"
                            emptySymbol="fa fa-star-o"
                            fullSymbol="fa fa-star"
                            fractions={2}
                            initialRating={this.state.rating}
                            onChange={this.update("rating")}
                        />
                        <div id="review-textarea">
                            <textarea name="review-body" id="" cols="60" rows="5" value={this.state.description} onChange={this.update("description")}></textarea>
                            <div><input className="submit-review" type="submit" value="Submit your review" /></div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                null
            )
        }
    }
}

export default ReviewForm;
