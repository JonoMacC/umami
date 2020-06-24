import React from "react";
import "./Business.css";
import RatingBar from "../RatingBar/RatingBar";

class Business extends React.Component {
  renderCategories() {
    let categories = "";
    this.props.business.categories.forEach((category, index) => {
      categories += category;
      if (index < this.props.business.categories.length - 1) {
        categories += " • ";
      }
    });
    return <span className="tag-list">{categories}</span>;
  }

  render() {
    return (
      <div className="Business">
        <a
          href={this.props.business.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="image-container">
            <img src={this.props.business.imageSrc} alt="" />
          </figure>

          <div className="information">
            <div className="main-info">
              <h2>{this.props.business.name}</h2>
              {this.renderCategories()}
            </div>
            <div className="review-info">
              <RatingBar rating={this.props.business.rating} />
              <p>{this.props.business.reviewCount} ratings</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Business;
