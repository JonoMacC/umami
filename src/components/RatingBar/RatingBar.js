import React from "react";
import "./RatingBar.css";

import { ReactComponent as FullStar } from "../Icons/full-star.svg";
import { ReactComponent as EmptyStar } from "../Icons/empty-star.svg";
import { ReactComponent as HalfStar } from "../Icons/half-star.svg";

class RatingBar extends React.Component {
  constructor(props) {
    super(props);

    this.numFullStars = Math.floor(this.props.rating);
    this.halfStar = Math.ceil(this.props.rating - this.numFullStars);

    this.state = {
      starsArray: [],
    };
  }

  componentDidMount() {
    this.starsFromRating();
  }

  // componentDidUpdate() {
  //   this.starsFromRating();
  // }

  starsFromRating() {
    const starsArray = [];
    for (let i = 0; i < this.numFullStars; i++) {
      starsArray.push(<FullStar />);
    }
    if (this.halfStar) {
      starsArray.push(<HalfStar />);
    }
    if (starsArray.length < 5) {
      // console.log(starsArray.length);
      for (let i = starsArray.length; i < 5; i++) {
        starsArray.push(<EmptyStar />);
      }
    }
    return this.setState({ starsArray: starsArray });
  }

  render() {
    return (
      <div className="star-rating">
        {this.state.starsArray.map((starItem, id) => {
          return <div key={id}>{starItem}</div>;
        })}
      </div>
    );
  }
}

export default RatingBar;
