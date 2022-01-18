import { useEffect, useState } from 'react';
import s from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { RatingProps } from "./Rating.props";

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        conctructRating(rating);
    },[rating]);
    
    const conctructRating = (currentRating:number) => {
        const updatedArray = ratingArray.map((ratingItem: JSX.Element, i: number) => {
            return (
                < StarIcon className = { cn(s.star, {
                [s.fill]:i < currentRating
                })} />
            );
        });
        setRatingArray(updatedArray);
    };
    
    return (
        <div {...props}>
            {ratingArray.map((ratingItem, i) =>(<span key={i}>{ratingItem}</span>))}
        </div>
    );
};