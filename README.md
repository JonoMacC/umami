# Umami
[![Netlify Status](https://api.netlify.com/api/v1/badges/1a7c2275-5d02-4089-9234-d78c76a3d7c1/deploy-status)](https://app.netlify.com/sites/eatumami/deploys)
> This project was bootstrapped with [Create React App](https://create-react-app.dev).<br />
> It uses the [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3) <br />
> It uses cors-anywhere to proxy requests for local development [Cors-Anywhere](https://github.com/Rob--W/cors-anywhere)

A simple SPA for interacting with the Yelp API focused on restaurants.

## Local Development

When running locally, corsAnywhere is used to proxy requests. This limits requests and you may encounter occasional errors as a result.

### Yelp API Key Setup

Set your Yelp API key as an environment variable on your local machine. Create a file in your root project directory called .env. In that file type (n.b. no spaces):

    REACT_APP_YELP_API_KEY=your-api-key-goes-here

Never share your API key in public such as in a git repository.

### Running

In your terminal

    yarn
    yarn start
    
You can view the app by navigating to **http://localhost:3000/** in your browser.

## Deploying on Netlify

Ensure that you have set up your API key as an environment variable for your site on Netlify. The configuration file netlify.toml will handle proxy redirects for the Yelp API.
