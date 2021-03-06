const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const yelp = "https://api.yelp.com/v3/businesses/";

// Set the router base path
// In development, use corsAnywhere to proxy requests
// In production, redirects are handled by Netlify as specified in netlify.toml
const routerBasePath =
  process.env.NODE_ENV === "development" ? `${corsAnywhere}${yelp}` : `/yelp/`;

const Yelp = {
  search(term, location, latitude, longitude, sortBy, limit) {
    let locationQuery;
    if (location) {
      locationQuery = `&location=${location}`;
    } else {
      locationQuery = `&latitude=${latitude}&longitude=${longitude}`;
    }

    const query = `search?term=${term}${locationQuery}&sort_by=${sortBy}&limit=${limit}&categories=food,restaurants`;
    return fetch(`${routerBasePath}${query}`, {
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
