const apiKey =
  "HHn-cyBvPf830b3UqshExAB86b1Al7-hs11nQ_FO_x_cmgmdncUS_UslH9-hMbSPMSedh4hZZU2-gxv1DzYk8U3t-X755I2iHuqmIQJf2ViTsee64Mi2UOYfInC8XnYx";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

const Yelp = {
  search(term, location, sortBy, limit) {
    return fetch(
      `${corsAnywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
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
