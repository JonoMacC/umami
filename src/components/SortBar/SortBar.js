import React from "react";
import "./SortBar.css";

class SortBar extends React.Component {
  constructor(props) {
    super(props);

    this.sortByOptions = {
      "Best Match": "best_match",
      Rating: "rating",
      Reviews: "review_count",
    };
  }

  getSortByClass(sortByOption) {
    return this.props.sortBy === sortByOption ? "active" : "";
  }

  handleSortByChange(sortByOption) {
    this.props.onSortChange(sortByOption);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          tabindex={0}
          aria-label={`sort by ${sortByOption}`}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SortBar label">
        <ul>{this.renderSortByOptions()}</ul>
      </div>
    );
  }
}

export default SortBar;
