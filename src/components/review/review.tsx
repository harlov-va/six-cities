import * as React from "react";

const Review = (props) => {
  const {review} = props;
  const getDate = (date) => {    
    const dateTemp  = new Date(date);
    const month = dateTemp.toLocaleString('ru-RU', { month: 'long' });
    return `${month} ${dateTemp.getFullYear()}`;
  }
  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54"
             alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
                        {review.user.name}
                      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${review.rating*20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={(new Date(review.date)).toISOString().slice(0,10)}>{getDate(review.date)}</time>
    </div>
  </li>
}
export default Review;
