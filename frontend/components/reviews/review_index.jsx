import React from 'react';
import ReviewIndexItem from './review_index_item';
// import Rater from 'react-rater';
import Rating from 'react-rating';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.product.id); 
    }

    averageRating() {
        let ratingSum = 0;
        this.props.reviews.forEach((review) => {
            ratingSum += review.rating
        });
        return (ratingSum / this.props.reviews.length);
    }

    renderProductRating() {
        if (this.averageRating()) {
            return (
                // <div id="average-rating">
                    <Rating
                        className="product-rating"
                        initialRating={this.averageRating()}
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star" />
                // </div>
            )
        } else {
            return null;
        }
    }



    render() {
        const user_id = this.props.user_id;
        const handleDelete = this.props.deleteReview;
        const reviews = this.props.reviews.map((review) => {
            return (
                    <ReviewIndexItem
                        key={`review-${review.id}`}
                        review={review}
                        user_id={user_id}
                        handleDelete={handleDelete}
                    />
            )
        });
        return (
            <div>
                {/* <Rater interactive={false} rating={4} /> */}
                <h3>Reviews: {this.renderProductRating()} ({reviews.length})</h3>
                {/* <h3 id="average-rating"> {reviews.length ? "Average Rating: " + this.averageRating() + " " + "(" + reviews.length + ")" : "No reviews on this product yet!"} </h3> */}
                {/* <div id="average-rating"> {reviews.length ? "Reviews: " + this.renderProductRating() + " " + "(" + reviews.length + ")" : "No reviews on this product yet!"} </div> */}
                <ul id="single-comment-item">
                    {reviews}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex; 
