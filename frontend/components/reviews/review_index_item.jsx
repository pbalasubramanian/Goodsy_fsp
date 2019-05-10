import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Rating from 'react-rating';

const ReviewIndexItem = (props) => {
    const { handleDelete, user_id, review } = props;
    // let currentTime = new Date();
    if (!review) {
        return null;
    }
    // let deleteReview = null;
    let editReview = null;

    // alert(user_id.id)
    // alert(review.reviewer_id)
    if( user_id ) {
        if (user_id.username === review.reviewer_id) {
            editReview =
                <div id="edit-review-button">
                    <Link to={`/`}>Update your review</Link>
                </div>;

            // deleteReview = <button id="delete-review-button" onClick={() => handleDelete(review.id)}>Delete review</button>;
        }
    }

    let dateObj = new Date(review.created_at);
    // alert(dateObj.toLocaleString());

    if( review.user ) {
    return (
        <div className="reviews-area">
            <li>
                <div className="review-block">
                    <div className="review-top-row">
                        <div className="review-name">
                            {review.user}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {dateObj.toLocaleString()}
                        </div>
                        <br/>
                        {/* <div className="review-created-at"> */}
                            {/* {Annotation.last.created_at.in_time_zone} */}
                            {/* {review.user} */}
                            {/* {dateObj.toLocaleString()} */}
                        {/* </div> */}
                    </div>
                    {/* <div id="comment-rating-num">
                        Rating: {comment.rating}
                    </div> */}
                    <Rating
                        className="comment-rating"
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star"
                        initialRating={review.rating}
                    />
                    <div id="comment-description">
                        {review.description}
                    </div>
                </div>
                <br />
                <div id="editable-comment">
                    <div id="delete-comment">
                        <button className="delete-review-button" onClick={() => handleDelete(review.id)}>Delete review</button>
                    </div>
                    {/* <div id="edit-comment">{editComment}</div> */}
                </div>
            </li>
            <br/>

        </div>
    )
    } else {
        return null;
    }

}

export default withRouter(ReviewIndexItem); 
