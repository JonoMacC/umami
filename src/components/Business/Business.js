import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <a href={this.props.business.url} target='_blank' rel='noopener noreferrer'>
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt="" />
          </div>
        </a>
       
        <h2>{this.props.business.name}</h2>
       
        <div className="Business-information">
          <a href={this.props.business.mapUrl} target='_blank' rel='noopener noreferrer'>
            <div className="Business-address">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>
                {this.props.business.state} {this.props.business.zipCode}
              </p>
            </div>
          </a>
          
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
