import React from "react";
import "./App.css";

import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
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
      latitude: "",
      longitude: "",
      limit: 18,
      locateTerm: "Where?",
    };

    this.searchYelp = this.searchYelp.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.extendSearch = this.extendSearch.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coord = pos.coords;
      this.setState({
        latitude: coord.latitude,
        longitude: coord.longitude,
        locateTerm: "Nearby",
      });
    });
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption }, () => {
      this.searchYelp();
    });
  }

  handleTermChange(value) {
    this.setState({ term: value, limit: 18 });
  }

  handleLocationChange(value) {
    this.setState({ location: value, limit: 18 });
  }

  searchYelp() {
    if (this.state.term && (this.state.location || this.state.latitude)) {
      Yelp.search(
        this.state.term,
        this.state.location,
        this.state.latitude,
        this.state.longitude,
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
    // Results are limited to 50 by Yelp API
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
        <Hero />
        <SearchBar
          searchYelp={this.searchYelp}
          onLocationChange={this.handleLocationChange}
          locationPlaceholder={this.state.locateTerm}
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
