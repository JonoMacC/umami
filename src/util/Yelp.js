const apiKey =
  "HHn-cyBvPf830b3UqshExAB86b1Al7-hs11nQ_FO_x_cmgmdncUS_UslH9-hMbSPMSedh4hZZU2-gxv1DzYk8U3t-X755I2iHuqmIQJf2ViTsee64Mi2UOYfInC8XnYx";

const mapsPath = "https://www.google.com/maps/search/?api=1&";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
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
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
              mapUrl: mapsPath + business.name.replace(/ /g, '+') + '%2C+' + business.location.address1.replace(/ /g, '+') + '%2C+' + business.location.city.replace(/ /g, '+') + '%2C+' + business.location.state,
            };
          });
        }
      });
  },
};

export default Yelp;
