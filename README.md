# Umami
[![Netlify Status](https://api.netlify.com/api/v1/badges/1a7c2275-5d02-4089-9234-d78c76a3d7c1/deploy-status)](https://app.netlify.com/sites/eatumami/deploys)
> This project was bootstrapped with [Create React App](https://create-react-app.dev).
> It uses the [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3)

A simple SPA for interacting with the Yelp API focused on restaurants.

## Local Development

To run the app locally, you will need to modify Yelp.js in src > util.<br />
Un-comment lines 1 and 2. Change line 7 `/yelp/${query}` to `${corsAnywhere}${yelp}${query}`.<br />
Note that the cors-anywhere heroku proxy server limits requests which may result in occasional errors during testing.<br />
You must have your own Yelp API key.

### CORS Anywhere

The Yelp API does not support CORS which means when you make a request to the API from your local machine the request will be denied. You can fix this by sending the request through a proxy server that returns a header with CORS. The cors-anywhere heroku proxy server can be used for this purpose.

[cors-anywhere](https://github.com/Rob--W/cors-anywhere)

### Yelp API Key Setup

Set your Yelp API key as an environment variable on your local machine. Create a file in your root project directory called .env. In that file create a variable called REACT_APP_YELP_API_KEY and set it equal to your api key (n.b. no spaces).

    REACT_APP_YELP_API_KEY=your-api-key-goes-here

Never share your API key in public such as in a git repository.

### Running

Use `yarn start` to build a development version and run it on your local machine.

## Deploying on Netlify

Ensure that you have set up your API key as an environment variable for your site on Netlify. Revert any changes made for local development. The configuration file netlify.toml will handle proxy redirects for the Yelp API.
