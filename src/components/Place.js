import React from "react";


export default function Place(props) {

    return (
        <div className="place">
            <img className="place--photo" src={`../../images/${props.imageUrl}`} alt="" />
            <div className="place--info">
                <div className="place--location">
                    <img src="../../images/location.png" alt="" />
                    <span className="location">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="place--title">{props.title}</h1>
                <p className="place--time">{props.startDate} - {props.endDate}</p>
                <p className="place--description">{props.description}</p>
            </div>
        </div>
    )
}