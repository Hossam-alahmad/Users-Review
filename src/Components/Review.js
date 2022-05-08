import React, { useState } from "react";
import data from "./users";
import "../Css/review.css";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const Review = () => {
    const [id, setId] = useState(0);
    const { name, job, image, text } = data[id];

    const randomReview = () => {
        let random = Math.floor(Math.random() * data.length);
        if (random === id) random += 1;
        setId(checkNumber(random));
    };
    const checkNumber = id => {
        if (id > data.length - 1) {
            return 0;
        }
        if (id < 0) {
            return data.length - 1;
        }
        return id;
    };
    const nextReviewHandle = () => {
        randomReview();
        setId(id => {
            let newId = id + 1;
            return checkNumber(newId);
        });
    };
    const prevReviewHandle = () => {
        setId(id => {
            let newId = id - 1;
            return checkNumber(newId);
        });
    };

    return (
        <div className="review position-absolute top-50 end-50 text-center w-75 ">
            <h1 className="header position-relative pb-2 mb-5 ">
                Users Reviews
            </h1>
            <div className="review-box bg-white shadow p-4">
                <div className="review-img position-relative m-auto mb-4">
                    <img
                        src={image}
                        alt={image.substring(image.lastIndexOf("/") + 1)}
                        className="w-100 h-100"
                    />
                </div>
                <div className="review-content">
                    <h3 className="name">{name}</h3>
                    <span className="job mb-2 d-block">{job}</span>
                    <p className="info mb-2">{text}</p>
                    <div className="transition-icons mb-4">
                        <FaChevronCircleLeft
                            className="previous-icon icon"
                            onClick={prevReviewHandle}
                        />
                        <FaChevronCircleRight
                            className="next-icon icon"
                            onClick={nextReviewHandle}
                        />
                    </div>
                    <button
                        className="random-review btn text-white"
                        onClick={randomReview}
                    >
                        Random review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;
