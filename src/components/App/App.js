import React from "react";
import "./App.css";

import Hero from "../Hero/Hero";
import SortBar from "../SortBar/SortBar";
import BusinessList from "../BusinessList/BusinessList";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      sortBy: "best_match",
      term: "",
      location: "",
      limit: 18,
    };

    this.searchYelp = this.searchYelp.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.extendSearch = this.extendSearch.bind(this);
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption }, () => {
      this.searchYelp();
    });
  }

  handleTermChange(value) {
    this.setState({ term: value, limit: 18 });
    // this.searchYelp();
  }

  handleLocationChange(value) {
    this.setState({ location: value, limit: 18 });
    // this.searchYelp();
  }

  searchYelp() {
    if (this.state.term && this.state.location) {
      Yelp.search(
        this.state.term,
        this.state.location,
        this.state.sortBy,
        this.state.limit
      ).then((businesses) => {
        this.setState({ businesses: businesses });
      });
    } else {
      return;
    }
  }

  extendSearch() {
    // Increase the limit for the number of search results
    const newLimit = this.state.limit + 18;
    const setLimit = newLimit > 50 ? 50 : newLimit;
    this.setState({ limit: setLimit }, () => {
      this.searchYelp();
    });
  }

  renderButton() {
    if (this.state.businesses.length > 0 && this.state.limit < 50) {
      return (
        <section className="container-center">
          <Button
            onClick={this.extendSearch}
            value="Show More"
            className="secondary"
          />
        </section>
      );
    }
    return;
  }

  render() {
    return (
      <div className="App">
        <Hero
          searchYelp={this.searchYelp}
          onLocationChange={this.handleLocationChange}
          onTermChange={this.handleTermChange}
        />
        <SortBar
          onSearch={this.searchYelp}
          onSortChange={this.handleSortByChange}
          sortBy={this.state.sortBy}
        />
        <BusinessList businesses={this.state.businesses} />
        {this.renderButton()}
        <Footer />
      </div>
    );
  }
}

export default App;
