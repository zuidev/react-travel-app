import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <span className="card--badge">{badgeText}</span>}
            <img className="card--photo" src={`../../images/${props.coverImg}`} alt="" />
            <span className="card--stats">
                <img src="../../images/star.png" alt="" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </span>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><strong>From ${props.price} </strong> / person</p>
        </div>
    )
}