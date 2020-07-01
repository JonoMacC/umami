// const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
// const yelp = "https://api.yelp.com/v3/businesses/";

const Yelp = {
  search(term, location, sortBy, limit) {
    const query = `search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}&categories=food,restaurants`;
    return fetch(`/yelp/${query}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          const jsonResponse = response.json();
          return jsonResponse;
        }
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              categories: business.categories.map((category) => category.title),
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
            };
          });
        }
      });
  },
};

export default Yelp;
