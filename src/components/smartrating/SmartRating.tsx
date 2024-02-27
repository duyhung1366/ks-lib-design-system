import React, { useState } from "react";
import { SmartRatingProps } from "./SmartRating.types";
import styled from "styled-components";

const SmartWrapper = styled.div({
    ".star": {
        fontSize: "large"
    }, 
    ".starActive": {
        color: "red"
    },
    ".starInactive": {
        color: "#ccc"
    },
    ".rating-secondary": {
        backgroundColor: "black",
        color: "white",
        padding: 6
    }
})

const SmartRating: React.FC<SmartRatingProps> = (props) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const [rating, setRating] = useState(0);
    return (
        <SmartWrapper className={`star-rating rating-${props.theme}`}>
            <h1>{props.title}</h1>
            {stars.map((star, index) => {
                const starCss = star <= rating ? "starActive" : "starInactive";
                return (
                    <button
                        disabled={props.disabled}
                        data-testid={`${ props.testIdPrefix }-${ index }`}
                        key={star}
                        className={`${ starCss }`}
                        onClick={() => setRating(star)}
                    >
                        <span className="star">★</span>
                    </button>
                );
            })}
        </SmartWrapper>
    );
};

export default SmartRating;